from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class ReviewImage(db.Model):
    __tablename__ = "review_images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    reviewId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), nullable=False)
    image = db.Column(db.String, nullable=True)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    review = db.relationship("Review", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "reviewId": self.reviewId,
            "imageUrl": self.image,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
