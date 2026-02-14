from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db(app):
    # OPTION 1: SQLite (Currently Active - Comment this out to stop using it)
    # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///heart_disease.db'
    
    # OPTION 2: MySQL (Uncomment and fill in your details to use MySQL)
    # Format: mysql+pymysql://USERNAME:PASSWORD@localhost/DATABASE_NAME
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:SUS77%23ta@localhost/tableau_project'
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)