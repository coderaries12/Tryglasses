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
        stars = randint(1, 5)
    )
    review2 = Review(
        productId = 2,
        userId = randint(1, 3),
        reviewTitle= "I love these Frames",
        quality = random.choice(quality),
        fit = random.choice(fit),
        style = random.choice(style),
        review = "I bought these glasses about 3weeks ago. Took about 2 weeks to get here. Not bad. But I love them. I will be ordering another pair this week. 1st time ever ordering from them. So Glad I Did! Don't hesitate to order you some. You want be disappointed. Glasses also look like picture.",
        stars = randint(1, 5)
    )
    all_reviews = [review1, review2 ]
    _ = [db.session.add(review) for review in all_reviews]
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()
