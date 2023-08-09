from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Order, Product
from flask_login import current_user, login_required
from app.forms import OrderForm

order_routes = Blueprint('orders', __name__)


@order_routes.route('/new', methods=["POST"])
def create_order():
    form = OrderForm()
    form['csrf_token'].data = request.cookies.get('csrf_token')
    if form.validate_on_submit():
        order = Order(
            userId=current_user.id,
            # userId=3,
            fullName=form.data["fullName"],
            email=form.data["email"],
            phone=form.data["phone"],
            address=form.data["address"],
            city=form.data["city"],
            state=form.data["state"],
            
        )   
        db.session.add(order)
        
        db.session.commit()
        return {'order': order.to_dict()}
    
    if form.errors:
        print(form.errors)



@order_routes.route('/<int:id>/order_products/products', methods=['PUT'])
def add_product_order(id):
    order = Order.query.get(id)
    products = list()
    for p in request.json:
       # products.append(Product.query.get(p))
        product = Product.query.get(p)
        product.products.append(order)

    db.session.commit()
    return {'order': order.to_dict()}
    
# @order_routes.route('/<int:orderId>/history/new', methods=["POST"])
# def create_orderhistory(orderId):
#     form = OrderHistoryForm()
#     form['csrf_token'].data = request.cookies.get('csrf_token')
#     # print("----------------------------------------------------")
#     if form.validate_on_submit():
#         print("----------------------------------------------------",form.data["products"])   
#         orderhistory = OrderHistoryForm(
#             userId=current_user.id,
#             orderId=orderId,
#             # userId=3,
#             products=form.data["products"],
            
            
#         )   
#         db.session.add(orderhistory)
        
#         db.session.commit()
#         return {'orderhistory': orderhistory.to_dict()}
    
#     if form.errors:
#         print(form.errors)

@order_routes.route('/')
def get_orders():
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/<int:orderId>', methods=["PUT"])
def edit_order(orderId):
    order = Order.query.get(orderId)
    form = OrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(orderId)
    if form.validate_on_submit():
        print(form.data)
        if form.data["fullName"]:
            order.fullName = form.data["fullName"]
        if form.data["email"]:
            order.email = form.data["email"]
        if form.data["phone"]:
             order.phone = form.data["phone"]
        if form.data["address"]:
            order.address = form.data["address"]
        if form.data["city"]:
            order.city = form.data["city"]
        if form.data["state"]:
            order.state = form.data["state"]  
        db.session.commit()
        return {'order': order.to_dict()}
    
    else:
        print(form.errors)
        return "Product form"

@order_routes.route('/<int:orderId>', methods=["DELETE"])
def delete_order(orderId):
    order = Order.query.get(orderId)
    deleted_order = {'order': order.to_dict()}
    db.session.delete(order)
    db.session.commit()
    return deleted_order
