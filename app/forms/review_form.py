from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, URLField, SubmitField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    reviewTitle = StringField("Review-title", validators=[DataRequired()])
    quality = StringField("Quality", validators=[DataRequired()])
    fit = StringField("Fit", validators=[DataRequired()])
    style = StringField("Style", validators=[DataRequired()])
    review = StringField("Review", validators=[DataRequired()])
    stars = IntegerField("Stars", validators=[DataRequired()])
    reviewImage = URLField("Image")
    submit = SubmitField("Submit")
