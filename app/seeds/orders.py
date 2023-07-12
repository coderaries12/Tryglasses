from app.models import db, Order, environment, SCHEMA
from sqlalchemy.sql import text

def seed_orders():
    order1 = Order(
        userId = 1,
        # shoppingSessionId = 1,
        fullName = "Demo User",
        email = "demo@aa.io",
        phone = "5466744560",
        address = "Pike Street 123 rd",
        city = "Redmond",
        state = "Washington"
    
    )
    order2 = Order(
        userId = 2,
        # shoppingSessionId = 2,
        fullName = "Marnie User",
        email = "marnie@aa.io",
        phone = "5555789567",
        address = "Rock Street 500 Ave rd",
        city = "Bellevue",
        state = "Washington"
    )

    orders = [order1, order2]

    _ = [db.session.add(order) for order in orders]
    db.session.commit()

def undo_orders():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.orders RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM orders"))
    db.session.commit()
   
