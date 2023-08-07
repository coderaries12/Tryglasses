from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class ShoppingSession(db.Model):
    __tablename__ = "shopping_sessions"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    total = db.Column(db.Float, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", back_populates="cart_session")
   
    cart = db.relationship("CartItem", back_populates="session", cascade="all, delete-orphan")
    # cart = db.relationship("CartItem", back_populates="session")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "total": self.total,
            "cart": [cartItem.to_dict() for cartItem in self.cart],
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
