from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from.favorites import favorites


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    products = db.relationship("Product", back_populates="user")
    reviews = db.relationship("Review", back_populates="user")
    cart_session = db.relationship("ShoppingSession", uselist=False, back_populates="user")
    orders = db.relationship("Order", back_populates="user")
    order_history = db.relationship("OrderHistory", back_populates="user")

    user_favorites = db.relationship(
        "Product",
        secondary=favorites,
        back_populates="product_favorites",
        cascade="delete, all",
    )
    
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'user_favorites': [favorite.to_dict_favorites() for favorite in self.user_favorites],
            'cart_session': self.cart_session.to_dict(),
            # 'orders':self.orders.to_dict() 

        }

    def to_dict_review_user(self):
        return {
            'id': self.id,
            'username': self.username
        }
