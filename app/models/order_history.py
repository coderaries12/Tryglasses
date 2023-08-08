from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class OrderHistory(db.Model):
    __tablename__ = "orders_history"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    orderId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), nullable=False)
    products = db.Column(db.String, nullable=True)
    
    
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

   
    user = db.relationship("User", back_populates="order_history")
    # order = db.relationship("Order", back_populates="order_history", uselist="False")
    # cart = db.relationship("CartItem", back_populates="order")
    # cart_session = db.relationship("ShoppingSession", back_populates="orders")
    

    def formatted_updatedAt(self):
        return self.updatedAt.strftime('%B %d, %Y') 
    
    def formatted_createdAt(self):
        return self.createdAt.strftime('%B %d, %Y')

    def to_dict(self):
        return {
            "id": self.id,
            "userId":self.userId,
            "orderId":self.orderId,
            "products":self.products,
            "createdAt": self.formatted_createdAt(),
            "updatedAt": self.formatted_updatedAt()
        }
