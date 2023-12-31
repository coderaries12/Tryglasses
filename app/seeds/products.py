from app.models import db, Product, User, environment, SCHEMA
from sqlalchemy.sql import text


def seed_products():

    user = User.query.get(1)
    

    product1 = Product(
        userId = 1,
        type = "sunglasses",
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
        type = "eyeglasses",
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
        type = "eyeglasses",
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
        type = "eyeglasses",
        title = "Avery Glasses",
        price = "42",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Gray",
        frameMaterial = "Metal",
        frameShape = " Square",
        description = "If you’re looking for straightforward style, then Avery is the frame for you. This versatile design features a matte blue face front, with slim metal arms and a timeless square silhouette. The stormy hue adds intrigue to this simple look, perfect for the minimalist who likes to mix things up.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pm0971_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",   
    )
    product5 = Product(
        userId = 1,
        type = "eyeglasses",
        title = "Kiel Glasses",
        price = "55",
        size = "Small",
        frameType = "Full Frame",
        frameColor = " Rose Gold",
        frameMaterial = "Metal",
        frameShape = "Round",
        description = "The best thing about a square frame is the versatility. Classic, preppy, modern, alternative…No matter your style, Kiel is the perfect pair to complete your look — featuring a translucent acetate build and subtle silver details throughout. Complete with spring hinges for added comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pl9235_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product6 = Product(
        userId = 2,
        type = "eyeglasses",
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
        type = "eyeglasses",
        title = "Briggs Glasses",
        price = "52",
        size = "Large",
        frameType = "Full Frame",
        frameColor = "Black",
        frameMaterial = "Acetate",
        frameShape = "Square",
        description = "Scholarly, but not uptight. Alternative, but timeless. Briggs is the perfect blend of classic prep and underground style. The sleek black acetate looks right at home on the retro-inspired square frame, complete with double rivets and spring hinges for added comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/pl9220_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product8 = Product(
        userId = 2,
        type = "sunglasses",
        title = "Oakley Cables",
        price = "130",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Matte Black Sunglasses",
        frameMaterial = "Plastic",
        frameShape = "Rectangle",
        description = "Scholarly, but not uptight. Alternative, but timeless. Briggs is the perfect blend of classic prep and underground style. The sleek black acetate looks right at home on the retro-inspired square frame, complete with double rivets and spring hinges for added comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/luspl00925_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product9 = Product(
        userId = 2,
        type = "eyeglasses",
        title = "Oakley OX3133",
        price = "19",
        size = "Medium",
        frameType = "Semi Frame",
        frameColor = "Black",
        frameMaterial = "Metal",
        frameShape = "Rectangle",
        description = "This understated design is lightweight and perfect for anyone. The minimal plastic construction of these frames make them feel great to wear– they'll never leave any unsightly marks on your face– and the matte metallic finish lends them an air of class and sophistication.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lumt00101_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product10 = Product(
        userId = 2,
        type = "sunglasses",
        title = "Oakley Sylas",
        price = "52",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Crystal Sunglasses",
        frameMaterial = "Plastic",
        frameShape = "Rectangle",
        description = "For those who dare to be different, these crystal clear Oakley’s were made for you. Crafted with durable plastic, these shades feature striking blue tinted lenses that are sure to turn heads. And let’s not forget the blue signature “O” on the arms — a subtle nod to Oakley’s legendary status in the world of sunglasses.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/luspl01056_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product11 = Product(
        userId = 3,
        type = "sunglasses",
        title = "Oakley Chrystl",
        price = "152",
        size = "X-Large",
        frameType = "Full Frame",
        frameColor = " Black Sunglasses",
        frameMaterial = "Metal",
        frameShape = " Aviator",
        description = "The functional frame and lenses become one with Oakley® Chrystl — technical sports sunglasses with an eye for style. The metal brow bar cleverly connects with the arms for a streamlined design in black. Complete with the classic Oakley® logo on the temples, and comfortable arms for a secure fit. Plus adjustable nose pads for a custom fit.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lusmt00547_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product12 = Product(
        userId = 3,
        type = "eyeglasses",
        title = "Oakley Socket 5.5",
        price = "196",
        size = "Medium",
        frameType = "Semi Frame",
        frameColor = " Satin Pewter",
        frameMaterial = "Metal",
        frameShape = "Rectangle",
        description = "With sexy, subtle industrial detail and inimitable Oakley appeal, Socket 5.5 frames are a perfect fit for a discerning glasses wearer. Sleek and lightweight with spring hinges and adjustable nose pads, these eyeglasses do more than just look good– they feel as if they were made for your face.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lumt00117_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product13 = Product(
        userId = 3,
        type = "eyeglasses",
        title = "Oakley Dagger Board",
        price = "183",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Satin Black",
        frameMaterial = "Metal",
        frameShape = "Square",
        description = "Built for those who see the possibilities, this sleek square frame was designed with bold angles and a timeless satin black metal finish. With adjustable nose pads, so you can customize your perfect fit for all-day wear. Oakley’s classic style frames have never looked better.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lumt00938_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product14 = Product(
        userId = 3,
        type = "sunglasses",
        title = "Oakley Holbrook Metal",
        price = "261",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Matte Gunmetal Sunglasses",
        frameMaterial = "Metal",
        frameShape = "Square",
        description = "Get ready to make an edgy statement with these Oakley sunglasses. The matte gunmetal frame adds a touch of modern style to any outfit, while the square shape gives a sophisticated appeal. Constructed with high-quality metal, these shades are designed to withstand any adventure. Plus, the adjustable nose pads provide a custom fit for all-day comfort.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lusmt01065_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )

    product15 = Product(
        userId = 3,
        type = "sunglasses",
        title = "Oakley Holbrook Metal",
        price = "261",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Matte Gunmetal Black Sunglasses",
        frameMaterial = "Metal",
        frameShape = "Square",
        description = "Add a touch of sophistication and style to your look with these sleek square sunglasses. The matte gunmetal frame with black non-slip temple accents is the perfect complement to the blue tinted lenses. Plus, you’ll love the signature blue “O” on the arms, a nod to the ionic Oakley brand. Complete with adjustable nose pads for a custom fit.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/lusmt01064_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product16 = Product(
        userId = 4,
        type = "sunglasses",
        title = "Vogue Eyewear VO5410S",
        price = "70",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Transparent Burgundy Sunglasses",
        frameMaterial = "Metal",
        frameShape = "Round",
        description = "Bold, rich, and dramatic, this ‘70s-inspired square-shaped frame is an eye-catching addition to any outfit. With deep red plastic rims and purple gradient lenses, this unexpected color duo will turn heads all year round",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/luspl00906_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product17 = Product(
        userId = 4,
        type = "sunglasses",
        title = "Trice",
        price = "62",
        size = "X-Large",
        frameType = "Full Frame",
        frameColor = " Clear Black Clear Sunglasses",
        frameMaterial = "Acetate",
        frameShape = "Round",
        description = "Trice is a dramatic and stylish frame with large round lenses, perfect for any face shape. The ombre-like acetate in clear black has an irresistibly modern edge. Thick temple arms add to its unique flair, perfect for anyone looking to set themselves apart from the rest of the crowd.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/spl8748_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product18 = Product(
        userId = 5,
        type = "sunglasses",
        title = "Bowie",
        price = "49",
        size = "Medium",
        frameType = "Full Frame",
        frameColor = "  Crystal Blue Sunglasses",
        frameMaterial = "Acetate",
        frameShape = "Square",
        description = "Imagine yourself laying poolside in a striped cabana, the sounds of chattering friends, clinking cocktail glasses, and your favorite songs filling the air. With Bowie by your side, you’ll feel like you’re in a retro summer dreamland, no matter the season. These full-rim square frames are made with sturdy acetate and a crystal blue finish that’s sure",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/spl9021_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product19 = Product(
        userId = 5,
        type = "sunglasses",
        title = "Nat",
        price = "45",
        size = "Large",
        frameType = "Full Frame",
        frameColor = " Clear Crystal Sunglasses",
        frameMaterial = "Acetate",
        frameShape = "Square",
        description = "Elevate your look and start living your best retro life with Nat. Crafted in a clear crystal acetate construction, these square shades will give you all the nostalgic feels of the 1960s. With their chic and timeless design, you’ll never want to leave home without them!",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/spl9027_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )
    product20 = Product(
        userId = 5,
        type = "sunglasses",
        title = "Kilo",
        price = "52",
        size = "Medium",
        frameType = "Full Frame",
        frameColor = "Clear Crystal Sunglasses",
        frameMaterial = "Acetate",
        frameShape = "Aviator",
        description = "Seeing double? That's just Kilo bringing their A-game with their double XX design on the clear crystal face front. With their angular silhouette and acetate construction, they're a modern twist on the classic aviator style, inspired by the pop punk ethos of the early 70s.",
        previewImage = "https://img.ebdcdn.com/product/frame/gray/spl9083_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
        
    )



    
    







    all_products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20,  ]
    _ = [db.session.add(product) for product in all_products]
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
    db.session.commit()
