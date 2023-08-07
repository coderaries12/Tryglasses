from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Product, ShoppingSession, CartItem, db

user_routes = Blueprint('users', __name__)

@user_routes.route('/<int:userId>/cart', methods=['DELETE'])
def delete_cart(userId):
    print('in delete cart fn...')
    cart_session = ShoppingSession.query.get(userId)
    # cart_items = CartItem.query.filter(CartItem.sessionId == cart_session.id)
    # for cart_item in cart_items:
    #     db.session.delete(cart_item)
    cart_session.total = 0
    db.session.commit()
    return cart_session.to_dict()


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/favorites/products/<int:productId>', methods=['PUT'])
def add_fav(id, productId):
    user = User.query.get(id)
    product = Product.query.get(productId)
    product.product_favorites.append(user)

    db.session.commit()
    return {'user': user.to_dict()}

@user_routes.route('/<int:id>/favorites/products/<int:productId>', methods=['DELETE'])
def delete_fav(id, productId):
    user = User.query.get(id)
    product = Product.query.get(productId)
    product.product_favorites.remove(user)

    db.session.commit()
    return {'user': user.to_dict()}


@user_routes.route('/<int:id>/cart/products/<int:productId>/<int:value>', methods=['POST'])
def add_cart(id, productId, value):
    user = User.query.get(id)
    newCartItem = CartItem(
        sessionId=id,
        productId=productId,
        quantity=value
    )
    db.session.add(newCartItem)
    user.cart_session.cart.append(newCartItem)

    db.session.commit()
    return {'newCartItem': newCartItem.to_dict()}

@user_routes.route('/<int:id>/cart/products/<int:productId>/<int:cartId>/<int:value>', methods=['PUT'])
def updated_cart(id, cartId, productId, value):
    user = User.query.get(id)

    cartItem = CartItem.query.get(cartId)
    cartItem.quantity = value

    db.session.commit()
    return {'updatedCartItem': cartItem.to_dict()}

@user_routes.route('/<int:id>/cart/products/<int:productId>/<int:cartId>', methods=['DELETE'])
def delete_cart_item(id, cartId, productId):
    cart_item = CartItem.query.get(cartId)
    deleted_cart_item = {'cartItem': cart_item.to_dict()}
    db.session.delete(cart_item)
    db.session.commit()
    return deleted_cart_item
