from random import randint
from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
import random

quality = ["Low", "Average", "High"]
fit = ["Loose", "True to size", "Fit"]
style = ["Chic", "Vintage", "Classic"]

def seed_reviews():
    review1 = Review(
        productId = 1,
        userId = randint(1, 3),
        reviewTitle= "Great looking glasses",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "Love these glasses. I owed a different Muse model that was similar, but out of stock, so I ordered these and I am just as happy as with my previous pair.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_126,h_126/ms/review/review/0/2200?w=126"
    )
    review2 = Review(
        productId = 2,
        userId = randint(1, 3),
        reviewTitle= "I love these Frames",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "I bought these glasses about 3weeks ago. Took about 2 weeks to get here. Not bad. But I love them. I will be ordering another pair this week. 1st time ever ordering from them. So Glad I Did! Don't hesitate to order you some. You want be disappointed. Glasses also look like picture.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_126,h_126/ms/review/review/1679523542/17032?w=126"

    )
    review3 = Review(
        productId = 3,
        userId = randint(1, 3),
        reviewTitle= "Awesome",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "Great Fit & Look.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_966,h_966/ms/review/review/1684931144/17461?w=966"
    )
    review4 = Review(
        productId = 4,
        userId = randint(1, 3),
        reviewTitle= "Really Like these!!",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "My second pair I’ve ordered from glassesUSA - they came quickly and look and fit great.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_966,h_966/ms/review/review/1683558376/17347?w=966"

    )
    review5 = Review(
        productId = 5,
        userId = randint(1, 3),
        reviewTitle= "Perfect",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "I used my insurance to get frames from my local Ophthalmologist, They were pricey but I was so disappointed when I got them as they were made so cheap. Then I found Glasses USA, and I am so happy. These frames are so lightweight and they filled the prescription perfectly. I love them.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_966,h_966/ms/review/review/1680639629/17122?w=966"
    )
    review6 = Review(
        productId = 6,
        userId = randint(1, 3),
        reviewTitle= "Bright and Clear",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "The minute I put them on the TV was brighter and I could see the print on my phone without making it bigger.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_966,h_966/ms/review/review/0/5364?w=966"

    )
    review7 = Review(
        productId = 1,
        userId = randint(1, 3),
        reviewTitle= "New purchases from on line internet glasses.",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "I have had my glasses for about a week now. Its a wonder fell & fit and now I can see again.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_966,h_966/ms/review/review/0/2323?w=966"
    )
    review8 = Review(
        productId = 2,
        userId = randint(1, 3),
        reviewTitle= "Perfection",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "I love the fit and style of my frames, I am so happy with my purchase.",
        stars = randint(1, 5),
        reviewImage = "https://optimaxweb.glassesusa.com/image/upload/c_fill,g_faces,f_auto,q_auto,w_966,h_966/ms/review/review/1669566211/16018?w=966"

    )


    all_reviews = [review1, review2,  review3, review4, review5, review6, review7, review8]
    _ = [db.session.add(review) for review in all_reviews]
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()
