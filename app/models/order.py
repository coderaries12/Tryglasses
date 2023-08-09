from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .order_products import order_products

class Order(db.Model):
    __tablename__ = "orders"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    # productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    # shoppingSessionId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('shopping_sessions.id')), nullable=False)
    # cartItemsId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('cart_items.id')), nullable=False)
    fullName = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(1000), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

   
    user = db.relationship("User", back_populates="orders")
    # order_history = db.relationship("OrderHistory", back_populates="order")
    # cart = db.relationship("CartItem", back_populates="order")
    # cart_session = db.relationship("ShoppingSession", back_populates="orders")
    orderProducts = db.relationship(
        "Product",
        secondary=order_products,
        back_populates="products",
        cascade="delete, all",
    )

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
            'orderProducts': [order_product.to_dict_order_products() for order_product in self.orderProducts],
            
            # "cart": [cartItem.to_dict() for cartItem in self.cart],
            # "shoppingSessionId": self.shoppingSessionId,
            # "userId": self.userId,
             "user": self.user.to_dict(),
            # 'cart_session': self.cart_session.to_dict(),
            
            "createdAt": self.formatted_createdAt(),
            "updatedAt": self.formatted_updatedAt()
        }
