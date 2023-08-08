from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, URLField, SubmitField
from wtforms.validators import DataRequired

class OrderHistoryForm(FlaskForm):
    
    products = StringField("Products")
    
    submit = SubmitField("Submit")
