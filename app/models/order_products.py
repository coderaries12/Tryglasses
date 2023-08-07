from .db import db, environment, SCHEMA, add_prefix_for_prod

order_products = db.Table(
    'order_products',
    db.Model.metadata,
    db.Column('order_id', db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), primary_key=True ),
    db.Column('product_id', db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), primary_key=True )
)

if environment == "production":
    order_products.schema = SCHEMA
