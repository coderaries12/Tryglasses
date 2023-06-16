from app.models import db, CartItem, environment, SCHEMA
from sqlalchemy.sql import text

def seed_cart_items():
    cartItems1 = CartItem(
        sessionId=1,
        productId=3,
        quantity=3
    )
    cartItems2 = CartItem(
        sessionId=2,
        productId=1,
        quantity=2
    )
    cartItems3 = CartItem(
        sessionId=3,
        productId=4,
        quantity=5
    )


    cartItems = [cartItems1, cartItems2, cartItems3 ]

    _ = [db.session.add(cart) for cart in cartItems]
    db.session.commit()

def undo_cart_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cart_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cart_items"))

    db.session.commit()
