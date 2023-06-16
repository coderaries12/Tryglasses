from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class CartItem(db.Model):
    __tablename__ = "cart_items"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    sessionId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('shopping_sessions.id')), nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    session = db.relationship("ShoppingSession", back_populates="cart")
    product = db.relationship("Product", back_populates="cartItems")

    def to_dict(self):
        return {
            "id": self.id,
            "sessionId": self.sessionId,
            "productId": self.productId,
            "quantity": self.quantity,
            "product": self.product.to_dict_favorites(),
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
