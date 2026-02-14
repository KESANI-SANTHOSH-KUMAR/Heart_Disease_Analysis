
# import_data.py (ULTRA FAST VERSION)

import os
from dotenv import load_dotenv
load_dotenv()   # Loads DATABASE_URL from .env

import pandas as pd
from app import app
from database import db

# Path to CSV file
CSV_PATH = os.path.join("data", "heart_new2.csv")


def import_csv():
    with app.app_context():

        # Get SQLAlchemy engine
        engine = db.engine

        # Check CSV exists
        if not os.path.exists(CSV_PATH):
            print(f"❌ Error: File not found at {CSV_PATH}")
            return

        print(f"📂 Reading CSV from {CSV_PATH}...")

        try:
            # ✅ Read CSV
            df = pd.read_csv(CSV_PATH)

            # ✅ Rename columns to match database table
            df = df.rename(columns={
                "HeartDisease": "heart_disease",
                "BMI": "bmi",
                "Smoking": "smoking",
                "AlcoholDrinking": "alcohol_drinking",
                "Stroke": "stroke",
                "PhysicalHealth": "physical_health",
                "MentalHealth": "mental_health",
                "DiffWalking": "diff_walking",
                "Sex": "sex",
                "AgeCategory": "age_category",
                "Race": "race",
                "Diabetic": "diabetic",
                "PhysicalActivity": "physical_activity",
                "GenHealth": "gen_health",
                "SleepTime": "sleep_time",
                "Asthma": "asthma",
                "KidneyDisease": "kidney_disease",
                "SkinCancer": "skin_cancer"
            })

            print("🚀 Inserting data into Railway Cloud DB (FAST MODE)...")

            # ✅ Ultra fast insert
            df.to_sql(
                name="heart_data",     # must match your table name
                con=engine,
                if_exists="append",   # change to "replace" for first time
                index=False,
                method="multi"
            )

            print(f"🎉 Success! Imported {len(df)} rows into Railway Cloud DB.")

        except Exception as e:
            print(f"❌ Import Failed: {e}")


if __name__ == '__main__':
    import_csv()

