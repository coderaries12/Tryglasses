from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    reviewTitle = db.Column(db.String(100), nullable=False)
    quality = db.Column(db.String(100), nullable=False)
    fit = db.Column(db.String(100), nullable=False)
    style = db.Column(db.String(100), nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    reviewImage = db.Column(db.String, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    # images = db.relationship("ReviewImage", back_populates="review", cascade="all, delete-orphan")
    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="reviews")

    def formatted_updatedAt(self):
        return self.updatedAt.strftime('%B %d, %Y')
    
    def formatted_createdAt(self):
        return self.createdAt.strftime('%B %d, %Y')

    def to_dict(self):
        return {
            "id": self.id,
            "productId": self.productId,
            "userId": self.userId,
            "user": self.user.to_dict_review_user(),
            "reviewTitle": self.reviewTitle,
            "quality": self.quality,
            "fit": self.fit,
            "style": self.style,
            "review": self.review,
            "stars": self.stars,
            "reviewImage" : self.reviewImage,
            "createdAt": self.formatted_createdAt(),
            "updatedAt": self.formatted_updatedAt()
        }
