import os
import pandas as pd
from app import app
from database import db
from models import HeartData

# Make sure your CSV file matches this name
CSV_PATH = os.path.join("data", "heart_new2.csv") 

def import_csv():
    with app.app_context():
        # 1. Reset Database (Drop old table structure to avoid errors)
        db.drop_all() 
        db.create_all()
        print("Database structure updated.")

        if not os.path.exists(CSV_PATH):
            print(f"Error: File not found at {CSV_PATH}")
            return

        print(f"Reading {CSV_PATH}...")
        try:
            df = pd.read_csv(CSV_PATH)
            
            # 2. Map CSV Columns to Database Model
            records = []
            for _, row in df.iterrows():
                rec = HeartData(
                    heart_disease = str(row['HeartDisease']),
                    bmi = float(row['BMI']),
                    smoking = str(row['Smoking']),
                    alcohol_drinking = str(row['AlcoholDrinking']),
                    stroke = str(row['Stroke']),
                    physical_health = float(row['PhysicalHealth']),
                    mental_health = float(row['MentalHealth']),
                    diff_walking = str(row['DiffWalking']),
                    sex = str(row['Sex']),
                    age_category = str(row['AgeCategory']),
                    race = str(row['Race']),
                    diabetic = str(row['Diabetic']),
                    physical_activity = str(row['PhysicalActivity']),
                    gen_health = str(row['GenHealth']),
                    sleep_time = float(row['SleepTime']),
                    asthma = str(row['Asthma']),
                    kidney_disease = str(row['KidneyDisease']),
                    skin_cancer = str(row['SkinCancer'])
                )
                records.append(rec)

            # 3. Bulk Insert (Faster)
            db.session.add_all(records)
            db.session.commit()
            print(f"✅ Success! Imported {len(records)} records into the new table structure.")

        except KeyError as e:
            print(f"❌ Error: CSV is missing column {e}. Check your CSV headers!")
        except Exception as e:
            print(f"❌ Import Failed: {e}")

if __name__ == '__main__':
    import_csv()