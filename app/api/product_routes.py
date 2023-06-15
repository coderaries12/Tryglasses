from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Product, ProductImage, Review
from flask_login import current_user, login_required
from app.forms import ReviewForm

product_routes = Blueprint('products', __name__)


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
