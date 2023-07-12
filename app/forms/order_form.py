from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,SubmitField, EmailField, TelField, TextAreaField
from wtforms.validators import DataRequired

class OrderForm(FlaskForm):
    fullName = StringField("Full Name", validators=[DataRequired()])
    email = EmailField("Email", validators=[DataRequired()])
    phone = TelField("Phone Number", validators=[DataRequired()])
    address = TextAreaField("Address", validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    submit = SubmitField("Submit")
