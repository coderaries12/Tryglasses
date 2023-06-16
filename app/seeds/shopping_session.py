from app.models import db, ShoppingSession, environment, SCHEMA
from sqlalchemy.sql import text

def seed_shopping_session():
    shoppingSession1 = ShoppingSession(
        userId=1,
        total=52.96
    )
    shoppingSession2 = ShoppingSession(
        userId=2,
        total=213
    )
    shoppingSession3 = ShoppingSession(
        userId=3,
        total=26.87
    )
    # shoppingSession4 = ShoppingSession(
    #     userId=4,
    #     total=213
    # )
    # shoppingSession5 = ShoppingSession(
    #     userId=5,
    #     total=26.87
    # )
    # shoppingSession6 = ShoppingSession(
    #     userId=6,
    #     total=26.87
    # )

    shoppingSession = [shoppingSession1, shoppingSession2, shoppingSession3 ]

    _ = [db.session.add(shopping) for shopping in shoppingSession]
    db.session.commit()

def undo_shopping_session():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shopping_sessions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shopping_sessions"))

    db.session.commit()
