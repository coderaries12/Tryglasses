from app.models import db, Product, User, environment, SCHEMA
from sqlalchemy.sql import text


def seed_products():

    user = User.query.get(1)

    product1 = Product(
        userId = 1,
        title = "Port",
        price = "61.60",
        size = "Large",
        frameType = "Full Frame",
        frameColor = "Black / Gray",
        frameMaterial = "TR90",
        frameShape = "Rectangle",
        description = "The Port is an elegant frame crafted from premium acetate. Sporting sleek arms and an angular design this is your ultimate 'no fuss' frame.",
        previewImage = "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/31-p1961_f_1.jpg/w=400,h=200,fit=fill,bg=fff",    
    )
    product2 = Product(
        userId = 1,
        title = "Beech Glasses",
        price = "59",
        size = "Medium",
        frameType = "Full Frame",
        frameColor = "Crystal Dark Blue",
        frameMaterial = "Plastic",
        frameShape = "Rectangle",
        description = "Made from recycled plastic bottles and part of our 5 TO SEE® collection, Beech is a frame that is sustainably stylish. Its rectangular shape is classic while still giving you the ability to show off your personal style. Enter the dark blue hue for a pop of color — perfect for a splash of fun with your everyday wear.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pl8919_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",   
    )
    product3 = Product(
        userId = 1,
        title = "Coexist Glasses",
        price = "25",
        size = "Large ",
        frameType = "Full Frame",
        frameColor = " Tortoise",
        frameMaterial = "plastic-metal",
        frameShape = "Browline",
        description = "This bold browline style frame is perfectly complemented by the warm Tortoiseshell finish. The full-sized lenses and decorative hinge studs help this classy frame to stand out even further. Coexist is great for anyone looking for a modern twist on a classic style of frame.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pm0402_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",   
    )
    product4 = Product(
        userId = 1,
        title = "Good Vibrations",
        price = "42",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Gold Sunglasses",
        frameMaterial = "metal",
        frameShape = " Aviator",
        description = "Pick up some Good Vibrations in a new limited-edition color. These classic aviator shades were pretty much made for drives down the California coast. Featuring subtle gold eyewire with a curved nose bridge, tortoiseshell temple tips for that extra detail, and adjustable nose pads for a style that’s ready for an endless summer.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/smt7054_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",   
    )
    product5 = Product(
        userId = 1,
        title = "St Michel Glasses",
        price = "35",
        size = "Small",
        frameType = "Full Frame",
        frameColor = " Rose Gold",
        frameMaterial = "metal",
        frameShape = "Round",
        description = "These full-rim metal frames are currently hot fashion for women and men. The on-trend frame-shape of St. Michael S brings extra elegance with the tasteful Rose Gold finish. The lightweight materials give you extra comfort with adjustable nose pads, for an easy-to-wear comfortable fit.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/mt6960_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )


    all_products = [product1, product2, product3, product4, product5 ]
    _ = [db.session.add(product) for product in all_products]
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
    db.session.commit()
