from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Product, ProductImage, Review
from flask_login import current_user, login_required
from app.forms import ReviewForm

product_routes = Blueprint('products', __name__)

@product_routes.route('<int:productId>/reviews/<int:reviewId>', methods = ["PUT"])
def update_review(productId, reviewId):
    review = Review.query.get(reviewId)
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("review is ", review.reviewTitle, review.quality, review.fit, review.style, review.review, review.stars, review.reviewImage)
    if form.validate_on_submit():
        if form.data["reviewTitle"]:
            review.reviewTitle = form.data["reviewTitle"]
        if form.data["quality"]:
            review.quality = form.data["quality"]
        if form.data["fit"]:
            review.fit = form.data["fit"]
        if form.data["style"]:
            review.style = form.data["style"]
        if form.data["review"]:
            review.review = form.data["review"]
        if form.data["stars"]:
            review.stars = form.data["stars"]
        if form.data["reviewImage"]:
            review.reviewImage = form.data["reviewImage"]
        
        db.session.commit()
        return {'review': review.to_dict()}
    else:
        print(form.errors)
        return "Testing"
    
@product_routes.route('<int:productId>/reviews/<int:reviewId>', methods = ["DELETE"])
def delete_review(productId, reviewId):
    review = Review.query.get(reviewId)
    deleted_review = {'review': review.to_dict()}
    db.session.delete(review)
    db.session.commit()
    return deleted_review


@product_routes.route('<int:productId>/reviews',methods =['POST'])
def create_review(productId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies.get('csrf_token')
    if form.validate_on_submit():
        review = Review(
            productId = productId,
            # userId = 2,
            userId=current_user.id,
            reviewTitle=form.data["reviewTitle"],
            quality=form.data["quality"],
            fit=form.data["fit"],
            style=form.data["style"],
            review=form.data["review"],
            stars=form.data["stars"],
            reviewImage=form.data["reviewImage"]
        )
        db.session.add(review)
        db.session.commit()
        return {'review': review.to_dict()}

@product_routes.route('/')
def get_products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}
