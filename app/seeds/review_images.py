from app.models import db, ReviewImage, environment, SCHEMA
from sqlalchemy.sql import text

def seed_review_images():
    reviewImage1 = ReviewImage(
        reviewId = 1,
        image="https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_126,h_126/ms/review/review/0/2200?w=126"
    )
    reviewImage2 = ReviewImage(
        reviewId = 2,
        image="https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_126,h_126/ms/review/review/1679523542/17032?w=126"
    )
    reviewImages = [reviewImage1, reviewImage2]
    _ = [db.session.add(reviewImage) for reviewImage in reviewImages]
    db.session.commit()

def undo_review_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.review_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM review_images"))

    db.session.commit()
