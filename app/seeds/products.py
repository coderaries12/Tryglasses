from app.models import db, Product, User, environment, SCHEMA
from sqlalchemy.sql import text


def seed_products():

    user = User.query.get(1)
    

    product1 = Product(
        userId = 1,
        title = "Nevada",
        price = "61",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Blue Striped Sunglasses",
        frameMaterial = "Acetate",
        frameShape = "Square",
        description = "Give in to your wanderlust with Nevada, the perfect shades for your sunniest adventures — featuring always in style square lenses and a full-rim acetate construction. This full-coverage design is made complete with a subtly striped finish in monochrome shades of blue. Plus double stud rivets for a classic look.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/spl7797_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",    
    )
    product2 = Product(
        userId = 1,
        title = "Sixto",
        price = "59",
        size = "X-Large",
        frameType = "Full Frame",
        frameColor = "Teal",
        frameMaterial = "Plastic",
        frameShape = "Square",
        description = "From the oversized square lenses to the groovy green frame, this ‘70s throwback was made for those looking to add some vintage flair to their wardrobe. The slim silhouette of the slightly translucent acetate makes Sixto the perfect low-key statement look, with a design worthy of a double-take (or two).",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pl7661_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",   
    )
    product3 = Product(
        userId = 1,
        title = "Villeneuve Glasses",
        price = "49",
        size = "Large ",
        frameType = "Full Frame",
        frameColor = "Blue",
        frameMaterial = "Acetate-metal",
        frameShape = "Square",
        description = "Villeneuve in translucent Blue exudes a friendly optimism, while the classic design and elegant features add a serious sophistication. The full-rims are crafted from premium acetate, and the traditional square lenses bring a sense of practicality to the bold and vibrant frame.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pm0784_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",   
    )
    product4 = Product(
        userId = 1,
        title = "Avery Glasses",
        price = "42",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Gray",
        frameMaterial = "metal",
        frameShape = " Square",
        description = "If you’re looking for straightforward style, then Avery is the frame for you. This versatile design features a matte blue face front, with slim metal arms and a timeless square silhouette. The stormy hue adds intrigue to this simple look, perfect for the minimalist who likes to mix things up.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pm0971_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",   
    )
    product5 = Product(
        userId = 1,
        title = "Kiel Glasses",
        price = "55",
        size = "Small",
        frameType = "Full Frame",
        frameColor = " Rose Gold",
        frameMaterial = "metal",
        frameShape = "Round",
        description = "The best thing about a square frame is the versatility. Classic, preppy, modern, alternative…No matter your style, Kiel is the perfect pair to complete your look — featuring a translucent acetate build and subtle silver details throughout. Complete with spring hinges for added comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pl9235_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product6 = Product(
        userId = 2,
        title = "Halverson Glasses",
        price = "55",
        size = "Small",
        frameType = "Full Frame",
        frameColor = " Tortoise Sunglasses",
        frameMaterial = "metal",
        frameShape = " Rectangle",
        description = "Transition seamlessly from running errands to attending important meetings with Halverson. These sleek rectangular glasses feature a subtle lens tint that exudes a sense of cool, calm, and collectedness all at once. The timeless tortoise finish adds a touch of sophistication that will keep you looking fresh and stylish from dawn till dusk.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/spl9231_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product7 = Product(
        userId = 2,
        title = "Briggs Glasses",
        price = "52",
        size = "Large",
        frameType = "Full Frame",
        frameColor = "Black",
        frameMaterial = "acetate",
        frameShape = "Square",
        description = "Scholarly, but not uptight. Alternative, but timeless. Briggs is the perfect blend of classic prep and underground style. The sleek black acetate looks right at home on the retro-inspired square frame, complete with double rivets and spring hinges for added comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pl9220_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product8 = Product(
        userId = 2,
        title = "Oakley Cables",
        price = "130",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Matte Black Sunglasses",
        frameMaterial = "plastic",
        frameShape = "Rectangle",
        description = "Scholarly, but not uptight. Alternative, but timeless. Briggs is the perfect blend of classic prep and underground style. The sleek black acetate looks right at home on the retro-inspired square frame, complete with double rivets and spring hinges for added comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/luspl00925_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product9 = Product(
        userId = 2,
        title = "Oakley OX3133",
        price = "19",
        size = "Medium",
        frameType = "Semi Frame",
        frameColor = "Black",
        frameMaterial = "metal",
        frameShape = "Rectangle",
        description = "This understated design is lightweight and perfect for anyone. The minimal plastic construction of these frames make them feel great to wear– they'll never leave any unsightly marks on your face– and the matte metallic finish lends them an air of class and sophistication.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lumt00101_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product10 = Product(
        userId = 2,
        title = "Oakley Sylas",
        price = "52",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Crystal Sunglasses",
        frameMaterial = "plastic",
        frameShape = "Rectangle",
        description = "For those who dare to be different, these crystal clear Oakley’s were made for you. Crafted with durable plastic, these shades feature striking blue tinted lenses that are sure to turn heads. And let’s not forget the blue signature “O” on the arms — a subtle nod to Oakley’s legendary status in the world of sunglasses.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/luspl01056_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product11 = Product(
        userId = 3,
        title = "Oakley Chrystl",
        price = "152",
        size = "X-Large",
        frameType = "Full Frame",
        frameColor = " Black Sunglasses",
        frameMaterial = "metal",
        frameShape = " Aviator",
        description = "The functional frame and lenses become one with Oakley® Chrystl — technical sports sunglasses with an eye for style. The metal brow bar cleverly connects with the arms for a streamlined design in black. Complete with the classic Oakley® logo on the temples, and comfortable arms for a secure fit. Plus adjustable nose pads for a custom fit.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lusmt00547_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product12 = Product(
        userId = 3,
        title = "Oakley Socket 5.5",
        price = "196",
        size = "Medium",
        frameType = "Semi Frame",
        frameColor = " Satin Pewter",
        frameMaterial = "metal",
        frameShape = "Rectangle",
        description = "With sexy, subtle industrial detail and inimitable Oakley appeal, Socket 5.5 frames are a perfect fit for a discerning glasses wearer. Sleek and lightweight with spring hinges and adjustable nose pads, these eyeglasses do more than just look good– they feel as if they were made for your face.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lumt00117_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product13 = Product(
        userId = 3,
        title = "Oakley Dagger Board",
        price = "183",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Satin Black",
        frameMaterial = "metal",
        frameShape = "Square",
        description = "Built for those who see the possibilities, this sleek square frame was designed with bold angles and a timeless satin black metal finish. With adjustable nose pads, so you can customize your perfect fit for all-day wear. Oakley’s classic style frames have never looked better.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lumt00938_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product14 = Product(
        userId = 3,
        title = "Oakley Holbrook Metal",
        price = "261",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Matte Gunmetal Sunglasses",
        frameMaterial = "metal",
        frameShape = "Square",
        description = "Get ready to make an edgy statement with these Oakley sunglasses. The matte gunmetal frame adds a touch of modern style to any outfit, while the square shape gives a sophisticated appeal. Constructed with high-quality metal, these shades are designed to withstand any adventure. Plus, the adjustable nose pads provide a custom fit for all-day comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lusmt01065_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )

    product15 = Product(
        userId = 3,
        title = "Oakley Holbrook Metal",
        price = "261",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Matte Gunmetal Black Sunglasses",
        frameMaterial = "metal",
        frameShape = "Square",
        description = "Add a touch of sophistication and style to your look with these sleek square sunglasses. The matte gunmetal frame with black non-slip temple accents is the perfect complement to the blue tinted lenses. Plus, you’ll love the signature blue “O” on the arms, a nod to the ionic Oakley brand. Complete with adjustable nose pads for a custom fit.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lusmt01064_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    







    all_products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15,  ]
    _ = [db.session.add(product) for product in all_products]
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
    db.session.commit()
