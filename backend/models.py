from database import db

class HeartData(db.Model):
    __tablename__ = 'heart_data'

    id = db.Column(db.Integer, primary_key=True)
    heart_disease = db.Column(db.String(50))   # 'Yes' or 'No'
    bmi = db.Column(db.Float)
    smoking = db.Column(db.String(10))
    alcohol_drinking = db.Column(db.String(10))
    stroke = db.Column(db.String(10))
    physical_health = db.Column(db.Float)      # Days
    mental_health = db.Column(db.Float)        # Days
    diff_walking = db.Column(db.String(10))
    sex = db.Column(db.String(10))
    age_category = db.Column(db.String(20))    # e.g., '55-59'
    race = db.Column(db.String(50))
    diabetic = db.Column(db.String(50))
    physical_activity = db.Column(db.String(10))
    gen_health = db.Column(db.String(20))
    sleep_time = db.Column(db.Float)
    asthma = db.Column(db.String(10))
    kidney_disease = db.Column(db.String(10))
    skin_cancer = db.Column(db.String(10))

    def to_dict(self):
        return {
            "id": self.id,
            "heart_disease": self.heart_disease,
            "bmi": self.bmi,
            "age_category": self.age_category,
            "gen_health": self.gen_health,
            "sleep_time": self.sleep_time,
            "sex": self.sex
        }