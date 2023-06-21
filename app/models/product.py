from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(25), nullable=False)
    price = db.Column(db.Float, nullable=False)
    size = db.Column(db.String(100), nullable=False)
    frameType = db.Column(db.String(100), nullable=False)
    frameColor = db.Column(db.String(100), nullable=False)
    frameMaterial = db.Column(db.String(100), nullable=False)
    frameShape = db.Column(db.String(100), nullable=False)
    previewImage = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    images = db.relationship("ProductImage", back_populates="product", cascade="all, delete-orphan")
    user = db.relationship("User", back_populates="products")
    reviews = db.relationship("Review", back_populates="product", cascade="all, delete-orphan")
    cartItems = db.relationship("CartItem", back_populates="product", cascade="all, delete-orphan")
    

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "title": self.title,
            "price": self.price,
            "size": self.size,
            "frameType": self.frameType,
            "frameColor": self.frameColor,
            "frameMaterial": self.frameMaterial,
            "frameShape": self.frameShape,
            "previewImage": self.previewImage,
            "images": [image.to_dict() for image in self.images],
            "user": self.user.to_dict(),
            "reviews": [review.to_dict() for review in self.reviews],
            "description": self.description,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
    
    def to_dict_favorites(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "title": self.title,
            "price": self.price,
            "size": self.size,
            "frameType": self.frameType,
            "description": self.description,
            "price": self.price,
            "previewImage": self.previewImage,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }

    