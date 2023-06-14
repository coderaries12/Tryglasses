from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Product
from flask_login import current_user, login_required

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def get_products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}
