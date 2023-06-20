from app.models import db, ProductImage, environment, SCHEMA
from sqlalchemy.sql import text
# with app.app_context():
#     db.drop_all()
#     db.create_all()
#     print("table made")

def seed_product_images():
    productImage1 = ProductImage(
        productId=1,
        image="https://img.ebdcdn.com/product/model/portrait/spl7797_w0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage2 = ProductImage(
        productId=1,
        image="https://img.ebdcdn.com/product/model/portrait/spl7797_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage3 = ProductImage(
        productId=1,
        image="https://img.ebdcdn.com/product/frame/gray/spl7797_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage4 = ProductImage(
        productId=1,
        image="https://img.ebdcdn.com/product/frame/gray/spl7797_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )

    
    productImage5 = ProductImage(
        productId=2,
        image="https://img.ebdcdn.com/product/model/portrait/pl7661_w0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage6 = ProductImage(
        productId=2,
        image="https://img.ebdcdn.com/product/model/portrait/pl7661_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage7 = ProductImage(
        productId=2,
        image="https://img.ebdcdn.com/product/frame/gray/pl7661_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage8 = ProductImage(
        productId=2,
        image="https://img.ebdcdn.com/product/frame/gray/pl7661_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )


    productImage9 = ProductImage(
        productId=3,
        image="https://img.ebdcdn.com/product/model/portrait/pm0784_w0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage10 = ProductImage(
        productId=3,
        image="https://img.ebdcdn.com/product/model/portrait/pm0784_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage11 = ProductImage(
        productId=3,
        image="https://img.ebdcdn.com/product/frame/gray/pm0784_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage12 = ProductImage(
        productId=3,
        image="https://img.ebdcdn.com/product/model/portrait/pm0784_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )

    productImage13 = ProductImage(
        productId=4,
        image="https://img.ebdcdn.com/product/model/portrait/pm0971_w0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage14 = ProductImage(
        productId=4,
        image="https://img.ebdcdn.com/product/model/portrait/pm0971_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage15 = ProductImage(
        productId=4,
        image="https://img.ebdcdn.com/product/frame/gray/pm0971_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage16 = ProductImage(
        productId=4,
        image="https://img.ebdcdn.com/product/model/portrait/pm0971_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )

    productImage17 = ProductImage(
        productId=5,
        image="https://img.ebdcdn.com/product/model/portrait/pl9235_w0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage18 = ProductImage(
        productId=5,
        image="https://img.ebdcdn.com/product/model/portrait/pl9235_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage19 = ProductImage(
        productId=5,
        image="https://img.ebdcdn.com/product/frame/gray/pl9235_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage20 = ProductImage(
        productId=5,
        image="https://img.ebdcdn.com/product/frame/gray/pl9235_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage21 = ProductImage(
        productId=6,
        image="https://img.ebdcdn.com/product/model/portrait/spl9231_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage22 = ProductImage(
        productId=6,
        image="https://img.ebdcdn.com/product/frame/gray/spl9231_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage23 = ProductImage(
        productId=6,
        image="https://img.ebdcdn.com/product/frame/gray/spl9231_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage24 = ProductImage(
        productId=6,
        image="https://img.ebdcdn.com/product/frame/gray/spl9231_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage25 = ProductImage(
        productId=7,
        image="https://img.ebdcdn.com/product/model/portrait/pl9220_w0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage26 = ProductImage(
        productId=7,
        image="https://img.ebdcdn.com/product/model/portrait/pl9220_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage27 = ProductImage(
        productId=7,
        image="https://img.ebdcdn.com/product/frame/gray/pl9220_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage28 = ProductImage(
        productId=7,
        image="https://img.ebdcdn.com/product/frame/gray/pl9220_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage29 = ProductImage(
        productId=8,
        image="https://img.ebdcdn.com/product/model/portrait/luspl00925_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage30 = ProductImage(
        productId=8,
        image="https://img.ebdcdn.com/product/frame/gray/luspl00925_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage31 = ProductImage(
        productId=8,
        image="https://img.ebdcdn.com/product/frame/gray/luspl00925_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage32 = ProductImage(
        productId=8,
        image="https://img.ebdcdn.com/product/frame/gray/luspl00925_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage33 = ProductImage(
        productId=9,
        image="https://img.ebdcdn.com/product/model/portrait/lumt00101_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage34 = ProductImage(
        productId=9,
        image="https://img.ebdcdn.com/product/frame/gray/lumt00101_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage35 = ProductImage(
        productId=9,
        image="https://img.ebdcdn.com/product/frame/gray/lumt00101_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage36 = ProductImage(
        productId=9,
        image="https://img.ebdcdn.com/product/frame/gray/lumt00101_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )

    productImage37 = ProductImage(
        productId=10,
        image="https://img.ebdcdn.com/product/frame/gray/luspl01056_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage38 = ProductImage(
        productId=10,
        image="https://img.ebdcdn.com/product/frame/gray/luspl01056_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage39 = ProductImage(
        productId=10,
        image="https://img.ebdcdn.com/product/frame/gray/luspl01056_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage40 = ProductImage(
        productId=10,
        image="https://img.ebdcdn.com/product/frame/gray/luspl01056_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage41 = ProductImage(
        productId=11,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt00547_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage42 = ProductImage(
        productId=11,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt00547_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage43 = ProductImage(
        productId=11,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt00547_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage44 = ProductImage(
        productId=11,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt00547_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage45 = ProductImage(
        productId=12,
        image="https://img.ebdcdn.com/product/model/portrait/lumt00117_w0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage46 = ProductImage(
        productId=12,
        image="https://img.ebdcdn.com/product/model/portrait/lumt00117_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage47 = ProductImage(
        productId=12,
        image="https://img.ebdcdn.com/product/frame/gray/lumt00117_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage48 = ProductImage(
        productId=12,
        image="https://img.ebdcdn.com/product/frame/gray/lumt00117_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage49 = ProductImage(
        productId=13,
        image="https://img.ebdcdn.com/product/model/portrait/lumt00938_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage50 = ProductImage(
        productId=13,
        image="https://img.ebdcdn.com/product/model/portrait/lumt00117_m0.jpg?im=Resize,width=500,height=600,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage51 = ProductImage(
        productId=13,
        image="https://img.ebdcdn.com/product/frame/gray/lumt00938_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage52 = ProductImage(
        productId=13,
        image="https://img.ebdcdn.com/product/frame/gray/lumt00938_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage53 = ProductImage(
        productId=14,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01065_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage54 = ProductImage(
        productId=14,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01065_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage55 = ProductImage(
        productId=14,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01065_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage56 = ProductImage(
        productId=14,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01065_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage57 = ProductImage(
        productId=15,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01064_0.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage58 = ProductImage(
        productId=15,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01064_2.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage59 = ProductImage(
        productId=15,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01064_1.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )
    productImage60 = ProductImage(
        productId=15,
        image="https://img.ebdcdn.com/product/frame/gray/lusmt01064_3.jpg?im=Resize,width=800,height=400,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85"
    )

    





    

    productImageId1 = [productImage1, productImage2, productImage3, productImage4]
    productImageId2 = [productImage5, productImage6, productImage7, productImage8]
    productImageId3 = [productImage9, productImage10, productImage11, productImage12]
    productImageId4 = [productImage13, productImage14, productImage15, productImage16]
    productImageId5 = [productImage17, productImage18, productImage19, productImage20]
    productImageId6 = [productImage21, productImage22, productImage23, productImage24]
    productImageId7 = [productImage25, productImage26, productImage27, productImage28]
    productImageId8 = [productImage29, productImage30, productImage31, productImage32]
    productImageId9 = [productImage33, productImage34, productImage35, productImage36]
    productImageId10 = [productImage37, productImage38, productImage39, productImage40]
    productImageId11 = [productImage41, productImage42, productImage43, productImage44]
    productImageId12 = [productImage45, productImage46, productImage47, productImage48]
    productImageId13 = [productImage49, productImage50, productImage51, productImage52]
    productImageId14 = [productImage53, productImage54, productImage55, productImage56]
    productImageId15 = [productImage57, productImage58, productImage59, productImage60]


    productImages = [ productImageId1, 
                      productImageId2,
                      productImageId3,
                      productImageId4,
                      productImageId5,
                      productImageId6, 
                     productImageId7,
                     productImageId8,
                     productImageId9,
                     productImageId10,
                     productImageId11,
                     productImageId12,
                     productImageId13,
                     productImageId14, 
                     productImageId15,
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
