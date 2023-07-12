from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Order(db.Model):
    __tablename__ = "orders"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    # productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    # shoppingSessionId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('shopping_sessions.id')), nullable=False)
    fullName = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.BigInteger, nullable=False)
    address = db.Column(db.String(1000), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

   
    user = db.relationship("User", back_populates="orders")
    # cart_session = db.relationship("ShoppingSession", back_populates="orders")
    

    def formatted_updatedAt(self):
        return self.updatedAt.strftime('%B %d, %Y') 
    
    def formatted_createdAt(self):
        return self.createdAt.strftime('%B %d, %Y')

    def to_dict(self):
        return {
            "id": self.id,
            "userId":self.userId,
            "fullName": self.fullName,
            "email": self.email,
            "phone": self.phone,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            # "shoppingSessionId": self.shoppingSessionId,
            # "userId": self.userId,
            "user": self.user.to_dict(),
            # 'cart_session': self.cart_session.to_dict(),
            
            "createdAt": self.formatted_createdAt(),
            "updatedAt": self.formatted_updatedAt()
        }
