from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class ProductImage(db.Model):
    __tablename__ = "product_images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    image = db.Column(db.String, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    product = db.relationship("Product", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "productId": self.productId,
            "image": self.image,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
