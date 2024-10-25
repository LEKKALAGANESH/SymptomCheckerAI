from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

with open('final_model (1).pkl', 'rb') as f:
    loaded_data = joblib.load(f)

best_model = loaded_data['best_model']
disease_mapping_dict = loaded_data['disease_mapping_dict']
symptoms_list = loaded_data['symptoms_list']

def predict_disease(selected_symptoms):
    input_symptoms = [1 if symptom in selected_symptoms else 0 for symptom in symptoms_list]
    symptoms_df = pd.DataFrame([input_symptoms], columns=symptoms_list)

    probabilities = best_model.predict_proba(symptoms_df)[0]
    disease_index = np.argmax(probabilities)
    predicted_disease = disease_mapping_dict.get(str(disease_index), "Unknown Disease")
    predicted_probability = probabilities[disease_index]

    return predicted_disease, predicted_probability

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        selected_symptoms = data.get('symptoms', [])

        if not selected_symptoms:
            return jsonify({'error': 'No symptoms provided!'}), 400

        invalid_symptoms = [s for s in selected_symptoms if s not in symptoms_list]
        if invalid_symptoms:
            return jsonify({'error': f"Invalid symptoms: {', '.join(invalid_symptoms)}"}), 400

        predicted_disease, predicted_probability = predict_disease(selected_symptoms)

        return jsonify({
            'predicted_disease': predicted_disease,
            'predicted_probability': f"{predicted_probability * 100:.2f}%"
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
