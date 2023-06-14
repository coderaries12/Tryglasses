from app.models import db, ProductImage, environment, SCHEMA
from sqlalchemy.sql import text
# with app.app_context():
#     db.drop_all()
#     db.create_all()
#     print("table made")

def seed_product_images():
    productImage1 = ProductImage(
        productId=1,
        image="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/ms/media/catalog_product/1/31-p1961_f_1.jpg/w=400,h=200,fit=fill,bg=fff"
    )
    productImage2 = ProductImage(
        productId=1,
        image="https://img.ebdcdn.com/product/frame/gray/spl8869_2.jpg?im=Resize,width=280,height=140,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage3 = ProductImage(
        productId=2,
        image="https://img.ebdcdn.com/product/frame/gray/pl8919_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage4 = ProductImage(
        productId=2,
        image="https://img.ebdcdn.com/product/model/portrait/pl8919_m0.jpg?im=FaceCrop,algorithm=dnn,width=60,height=60"
    )
    productImage5 = ProductImage(
        productId=3,
        image="https://img.ebdcdn.com/product/model/portrait/pm0402_m0.jpg?im=FaceCrop,algorithm=dnn,width=60,height=60"
    )
    productImage6 = ProductImage(
        productId=3,
        image="https://img.ebdcdn.com/product/frame/gray/pm0402_2.jpg?im=Resize,width=280,height=140,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage7 = ProductImage(
        productId=4,
        image="https://img.ebdcdn.com/product/model/portrait/smt7054_w0.jpg?im=FaceCrop,algorithm=dnn,width=60,height=60"
    )
    productImage8 = ProductImage(
        productId=4,
        image="https://img.ebdcdn.com/product/frame/gray/smt7054_2.jpg?im=Resize,width=280,height=140,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage9 = ProductImage(
        productId=5,
        image="https://img.ebdcdn.com/product/frame/gray/mt6960_2.jpg?im=Resize,width=280,height=140,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage10 = ProductImage(
        productId=5,
        image="https://img.ebdcdn.com/product/model/portrait/mt6960_m0.jpg?im=FaceCrop,algorithm=dnn,width=60,height=60"
    )

    

    productImageId1 = [productImage1, productImage2]
    productImageId2 = [productImage3, productImage4]
    productImageId3 = [productImage5, productImage6]
    productImageId4 = [productImage7, productImage8]
    productImageId5 = [productImage9, productImage10]


    productImages = [ productImageId1, 
                      productImageId2,
                      productImageId3,
                      productImageId4,
                      productImageId5,
                    ]
    
    for item in productImages:
        for i in item:
            db.session.add(i)
    
    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM product_images"))
        
    db.session.commit()
