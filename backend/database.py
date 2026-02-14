from flask_sqlalchemy import SQLAlchemy
import os

db = SQLAlchemy()

def init_db(app):
    # ✅ Get Railway DB URL from Render Environment Variables
    db_url = os.getenv("DATABASE_URL")

    # Railway gives mysql:// but SQLAlchemy needs mysql+pymysql://
    if db_url and db_url.startswith("mysql://"):
        db_url = db_url.replace("mysql://", "mysql+pymysql://", 1)

    app.config['SQLALCHEMY_DATABASE_URI'] = db_url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
