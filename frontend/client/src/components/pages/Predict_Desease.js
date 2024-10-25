import axios from 'axios';
import React, { useRef, useState,useEffect } from 'react';
import '../scripts/predict_Disease.css';

const healthConditions = {
    "Fungal infection": {
        "Health Tips": "Maintain good hygiene, keep affected areas dry and clean.",
        "Do's": ["Wear loose, breathable clothing", "Use antifungal powder"],
        "Don'ts": ["Avoid sharing personal items like towels", "Avoid tight-fitting clothing"]
    },
    "Allergy": {
        "Health Tips": "Identify and avoid allergens, take antihistamines.",
        "Do's": ["Keep your living space clean", "Use air purifiers"],
        "Don'ts": ["Avoid exposure to known triggers like dust or pollen"]
    },
    "GERD": {
        "Health Tips": "Eat smaller meals, avoid lying down right after eating.",
        "Do's": ["Maintain a healthy weight", "Elevate the head of your bed"],
        "Don'ts": ["Avoid acidic and spicy foods", "Stop smoking"]
    },
    "Chronic cholestasis": {
        "Health Tips": "Follow a low-fat diet, avoid alcohol.",
        "Do's": ["Stay hydrated", "Eat smaller and frequent meals"],
        "Don'ts": ["Avoid fried and fatty foods", "Minimize salt intake"]
    },
    "Drug Reaction": {
        "Health Tips": "Always consult a doctor before taking medication.",
        "Do's": ["Inform your doctor about any allergies or previous reactions"],
        "Don'ts": ["Avoid self-medication", "Don’t ignore any unusual symptoms"]
    },
    "Peptic ulcer diseae": {
        "Health Tips": "Eat a balanced diet, avoid NSAIDs (e.g., ibuprofen).",
        "Do's": ["Include foods like fruits, vegetables, and lean proteins"],
        "Don'ts": ["Avoid caffeine", "Alcohol", "Spicy foods"]
    },
    "AIDS": {
        "Health Tips": "Maintain a nutritious diet, follow medical guidance strictly.",
        "Do's": ["Regular medical check-ups", "Safe sex practices"],
        "Don'ts": ["Avoid sharing needles", "Don't skip medication"]
    },
    "Diabetes ": {
        "Health Tips": "Monitor your blood sugar levels, stay active.",
        "Do's": ["Eat a balanced diet with whole grains, lean proteins"],
        "Don'ts": ["Avoid sugary foods", "Alcohol", "Excessive carbs"]
    },
    "Gastroenteritis": {
        "Health Tips": "Stay hydrated, consume a bland diet.",
        "Do's": ["Drink oral rehydration solutions (ORS)"],
        "Don'ts": ["Avoid dairy", "Caffeine", "Spicy foods"]
    },
    "Bronchial Asthma": {
        "Health Tips": "Avoid allergens, use inhalers as prescribed.",
        "Do's": ["Practice breathing exercises", "Stay active"],
        "Don'ts": ["Avoid smoking", "Exposure to pollutants"]
    },
    "Hypertension ": {
        "Health Tips": "Maintain a healthy diet low in salt.",
        "Do's": ["Exercise regularly", "Manage stress"],
        "Don'ts": ["Avoid high-sodium foods", "Reduce alcohol intake"]
    },
    "Migraine": {
        "Health Tips": "Identify triggers, manage stress.",
        "Do's": ["Maintain a regular sleep schedule", "Stay hydrated"],
        "Don'ts": ["Avoid caffeine", "Processed foods", "Stress"]
    },
    "Cervical spondylosis": {
        "Health Tips": "Practice good posture, gentle neck exercises.",
        "Do's": ["Use a firm pillow", "Take breaks from desk work"],
        "Don'ts": ["Avoid heavy lifting", "Poor posture"]
    },
    "Paralysis (brain hemorrhage)": {
        "Health Tips": "Physical therapy and rehabilitation.",
        "Do's": ["Take prescribed medications", "Follow a balanced diet"],
        "Don'ts": ["Avoid smoking", "Alcohol", "Unhealthy foods"]
    },
    "Jaundice": {
        "Health Tips": "Follow a healthy, low-fat diet.",
        "Do's": ["Drink plenty of fluids", "Rest well"],
        "Don'ts": ["Avoid alcohol", "Fried", "Oily foods"]
    },
    "Malaria": {
        "Health Tips": "Use mosquito repellents, sleep under nets.",
        "Do's": ["Stay hydrated", "Take antimalarial medication"],
        "Don'ts": ["Avoid standing water, which attracts mosquitoes"]
    },
    "Chicken pox": {
        "Health Tips": "Isolate yourself to prevent spreading, keep the skin clean.",
        "Do's": ["Use calamine lotion to soothe itching"],
        "Don'ts": ["Avoid scratching the blisters"]
    },
    "Dengue": {
        "Health Tips": "Stay hydrated, rest adequately.",
        "Do's": ["Use mosquito repellents", "Sleep in mosquito-free environments"],
        "Don'ts": ["Avoid NSAIDs like aspirin; use paracetamol instead"]
    },
    "Typhoid": {
        "Health Tips": "Maintain hygiene, drink purified water.",
        "Do's": ["Follow a soft diet", "Take antibiotics as prescribed"],
        "Don'ts": ["Avoid raw foods", "Unboiled water"]
    },
    "hepatitis A": {
        "Health Tips": "Follow good sanitation practices.",
        "Do's": ["Drink clean water", "Wash your hands regularly"],
        "Don'ts": ["Avoid contaminated food and water"]
    },
    "Hepatitis B": {
        "Health Tips": "Get vaccinated, avoid sharing needles.",
        "Do's": ["Practice safe sex", "Regular check-ups"],
        "Don'ts": ["Avoid alcohol", "Don’t share personal items"]
    },
    "Hepatitis C": {
        "Health Tips": "Regular medical follow-ups, avoid alcohol.",
        "Do's": ["Follow a healthy diet", "Take prescribed medication"],
        "Don'ts": ["Avoid sharing needles", "Alcohol", "Smoking"]
    },
    "Hepatitis D": {
        "Health Tips": "Manage Hepatitis B to prevent Hepatitis D.",
        "Do's": ["Follow regular check-ups and medical advice"],
        "Don'ts": ["Avoid alcohol", "Unprotected sex"]
    },
    "Hepatitis E": {
        "Health Tips": "Drink clean, filtered water.",
        "Do's": ["Maintain good hygiene", "Wash hands before eating"],
        "Don'ts": ["Avoid contaminated food and water"]
    },
    "Alcoholic hepatitis": {
        "Health Tips": "Stop drinking alcohol immediately.",
        "Do's": ["Follow a healthy diet with plenty of vitamins"],
        "Don'ts": ["Avoid fatty foods", "Junk foods"]
    },
    "Tuberculosis": {
        "Health Tips": "Complete the full course of medication.",
        "Do's": ["Wear a mask in crowded places", "Practice good hygiene"],
        "Don'ts": ["Avoid skipping doses", "Alcohol", "Tobacco"]
    },
    "Common Cold": {
        "Health Tips": "Stay hydrated, get plenty of rest.",
        "Do's": ["Consume hot soups, tea, and other fluids"],
        "Don'ts": ["Avoid cold drinks", "Dairy products"]
    },
    "Pneumonia": {
        "Health Tips": "Follow doctor’s advice, rest well.",
        "Do's": ["Take prescribed antibiotics", "Stay hydrated"],
        "Don'ts": ["Avoid smoking", "Alcohol", "Exposure to cold"]
    },
    "Dimorphic hemmorhoids(piles)": {
        "Health Tips": "Eat a high-fiber diet, stay hydrated.",
        "Do's": ["Exercise regularly", "Use stool softeners"],
        "Don'ts": ["Avoid processed foods", "Sitting for long periods"]
    },
    "Heart attack": {
        "Health Tips": "Follow a heart-healthy diet, avoid stress.",
        "Do's": ["Regular exercise", "Monitor cholesterol levels"],
        "Don'ts": ["Avoid fatty foods", "Smoking", "Alcohol"]
    },
    "Varicose veins": {
        "Health Tips": "Avoid standing for long periods.",
        "Do's": ["Elevate your legs when resting", "Wear compression stockings"],
        "Don'ts": ["Avoid tight clothing around the waist"]
    },
    "Hypothyroidism": {
        "Health Tips": "Follow a balanced diet rich in iodine.",
        "Do's": ["Regular thyroid check-ups", "Exercise"],
        "Don'ts": ["Avoid gluten", "Highly processed foods"]
    },
    "Hyperthyroidism": {
        "Health Tips": "Avoid iodine-rich foods.",
        "Do's": ["Regular medical follow-ups", "Manage stress"],
        "Don'ts": ["Avoid caffeine", "Stress", "Smoking"]
    },
    "Hypoglycemia": {
        "Health Tips": "Keep glucose tablets or sugary drinks on hand.",
        "Do's": ["Eat small, frequent meals"],
        "Don'ts": ["Avoid alcohol on an empty stomach"]
    },
    "Osteoarthristis": {
        "Health Tips": "Maintain a healthy weight, exercise regularly.",
        "Do's": ["Follow low-impact exercises", "Warm baths for pain relief"],
        "Don'ts": ["Avoid overusing joints", "High-impact activities"]
    },
    "Arthritis": {
        "Health Tips": "Follow a healthy diet, stay active.",
        "Do's": ["Regular stretching exercises", "Take pain relievers as prescribed"],
        "Don'ts": ["Avoid high-impact activities that strain the joints"]
    },
    "(vertigo) Paroymsal  Positional Vertigo": {
        "Health Tips": "Avoid sudden movements.",
        "Do's": ["Stay hydrated", "Use techniques to manage symptoms"],
        "Don'ts": ["Avoid driving or operating heavy machinery"]
    },
    "Psoriasis": {
        "Health Tips": "Moisturize the skin regularly.",
        "Do's": ["Use prescribed topical treatments", "Avoid triggers"],
        "Don'ts": ["Avoid scratching", "Excessive sun exposure"]
    },
    "Candidiasis": {
        "Health Tips": "Maintain good hygiene.",
        "Do's": ["Wear breathable fabrics", "Use antifungal treatments as prescribed"],
        "Don'ts": ["Avoid tight clothing", "Moist environments"]
    },
    "Leukemia": {
        "Health Tips": "Follow doctor’s advice, maintain a nutritious diet.",
        "Do's": ["Regular medical check-ups", "Stay active"],
        "Don'ts": ["Avoid infections", "Smoking", "Alcohol"]
    },
    "Thyroid Cancer": {
        "Health Tips": "Regular follow-ups with healthcare provider.",
        "Do's": ["Maintain a healthy diet", "Stay informed about the condition"],
        "Don'ts": ["Avoid stress", "Smoking", "Alcohol"]
    },
    "Breast Cancer": {
        "Health Tips": "Regular screenings and self-exams.",
        "Do's": ["Eat a balanced diet", "Stay active"],
        "Don'ts": ["Avoid excessive alcohol", "Smoking"]
    },
    "Lung Cancer": {
        "Health Tips": "Avoid smoking and secondhand smoke.",
        "Do's": ["Regular screenings", "Stay physically active"],
        "Don'ts": ["Avoid exposure to environmental pollutants"]
    },
    "Prostate Cancer": {
        "Health Tips": "Regular screenings for men over 50.",
        "Do's": ["Eat a diet rich in fruits and vegetables"],
        "Don'ts": ["Avoid high-fat dairy products", "Processed meats"]
    },
    "Skin Cancer": {
        "Health Tips": "Use sunscreen, avoid excessive sun exposure.",
        "Do's": ["Regular skin checks", "Stay hydrated"],
        "Don'ts": ["Avoid tanning beds", "Sunburns"]
    },
    "Stomach Cancer": {
        "Health Tips": "Follow a balanced diet, avoid smoking.",
        "Do's": ["Regular check-ups", "Stay active"],
        "Don'ts": ["Avoid high-salt foods", "Processed foods"]
    },
    "Bladder Cancer": {
        "Health Tips": "Stay hydrated, avoid tobacco.",
        "Do's": ["Regular screenings", "Eat a healthy diet"],
        "Don'ts": ["Avoid processed foods", "High-sugar foods"]
    },
    "Kidney Cancer": {
        "Health Tips": "Follow a healthy diet, maintain a healthy weight.",
        "Do's": ["Stay active", "Regular medical check-ups"],
        "Don'ts": ["Avoid smoking", "Alcohol"]
    },
    "Multiple Sclerosis": {
        "Health Tips": "Follow a nutritious diet, manage stress.",
        "Do's": ["Stay active", "Regular follow-ups with healthcare provider"],
        "Don'ts": ["Avoid excessive heat", "Stress"]
    },
    "Alzheimer's Disease": {
        "Health Tips": "Stay mentally and socially active.",
        "Do's": ["Maintain a balanced diet", "Exercise regularly"],
        "Don'ts": ["Avoid isolation", "Stress"]
    },
    "Parkinson's Disease": {
        "Health Tips": "Follow a nutritious diet, exercise regularly.",
        "Do's": ["Stay socially active", "Regular medical follow-ups"],
        "Don'ts": ["Avoid smoking", "Stress"]
    },
    "Osteoporosis": {
        "Health Tips": "Maintain a balanced diet rich in calcium.",
        "Do's": ["Engage in weight-bearing exercises", "Get regular bone density tests"],
        "Don'ts": ["Avoid smoking", "Excessive alcohol intake"]
    },
    "Cushing's Syndrome": {
        "Health Tips": "Follow medical advice, maintain a healthy diet.",
        "Do's": ["Regular medical check-ups", "Stay active"],
        "Don'ts": ["Avoid high-sugar foods", "Alcohol"]
    },
    "Addison's Disease": {
        "Health Tips": "Follow medical advice, manage stress.",
        "Do's": ["Eat a balanced diet", "Stay hydrated"],
        "Don'ts": ["Avoid high-stress situations"]
    },
    "Adrenal Fatigue": {
        "Health Tips": "Rest and recuperate, manage stress.",
        "Do's": ["Maintain a balanced diet", "Get enough sleep"],
        "Don'ts": ["Avoid caffeine", "Excessive sugar"]
    },
    "Anemia": {
        "Health Tips": "Follow a diet rich in iron and vitamin B12.",
        "Do's": ["Include leafy greens, legumes, and lean meats in your diet"],
        "Don'ts": ["Avoid excessive caffeine", "Processed foods"]
    },
    "Vitamin D Deficiency": {
        "Health Tips": "Get adequate sunlight, consider supplements.",
        "Do's": ["Include vitamin D-rich foods like fatty fish and egg yolks"],
        "Don'ts": ["Avoid prolonged periods indoors without sunlight"]
    },
    "Vitamin B12 Deficiency": {
        "Health Tips": "Include B12-rich foods in your diet.",
        "Do's": ["Consider supplements if necessary", "Regular check-ups"],
        "Don'ts": ["Avoid excessive alcohol", "High-sugar foods"]
    }
}

const allSymptoms = [
    'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills',
    'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting',
    'burning_micturition', 'spotting_urination', 'fatigue', 'weight_gain', 'anxiety',
    'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy',
    'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes',
    'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin',
    'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain',
    'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine',
    'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach',
    'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm',
    'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion',
    'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements',
    'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness',
    'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels',
    'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties',
    'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips',
    'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck',
    'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance',
    'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort',
    'foul_smell_of_urine', 'continuous_feel_of_urine', 'passage_of_gases',
    'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain',
    'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation',
    'dischromic_patches', 'watering_from_eyes', 'increased_appetite', 'polyuria',
    'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration',
    'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections',
    'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption',
    'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations',
    'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling',
    'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister',
    'red_sore_around_nose', 'yellow_crust_ooze'
];


const PredictDisease = () => {
    const [symptoms, setSymptoms] = useState({
        symptom1: '',
        symptom2: '',
        symptom3: '',
        symptom4: '',
        symptom5: '',
        symptom6: '',
    });

    const [filteredSuggestions, setFilteredSuggestions] = useState({
        symptom1: [],
        symptom2: [],
        symptom3: [],
        symptom4: [],
        symptom5: [],
        symptom6: [],
    });

    const [predictionResult, setPredictionResult] = useState(null);
    const [error, setError] = useState(null);
    const [activeSuggestion, setActiveSuggestion] = useState({});
    const suggestionRefs = useRef({});
    const formRef = useRef(null);
    const [isSuggestionsVisible, setSuggestionsVisible] = useState({});
    const [loading, setLoading] = useState(true);
    const [showHealthTips, setShowHealthTips] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSymptoms({ ...symptoms, [name]: value });
        setActiveSuggestion({ ...activeSuggestion, [name]: -1 });

        if (value.trim()) {
            const currentFilteredSuggestions = allSymptoms.filter(symptom =>
                symptom.toLowerCase().includes(value.toLowerCase()) &&
                !Object.values(symptoms).includes(symptom)
            );

            setFilteredSuggestions({ ...filteredSuggestions, [name]: currentFilteredSuggestions });
            setSuggestionsVisible((prev) => ({ ...prev, [name]: true }));
        } else {
            setFilteredSuggestions({ ...filteredSuggestions, [name]: [] });
            setSuggestionsVisible((prev) => ({ ...prev, [name]: false }));
        }
    };

    const selectSymptom = (name, symptom) => {
        setSymptoms({ ...symptoms, [name]: symptom });
        setFilteredSuggestions({ ...filteredSuggestions, [name]: [] });
        setActiveSuggestion({ ...activeSuggestion, [name]: -1 });
        setSuggestionsVisible((prev) => ({ ...prev, [name]: false }));
    };

    const removeSymptom = (name) => {
        setSymptoms({ ...symptoms, [name]: '' });
        setFilteredSuggestions({ ...filteredSuggestions, [name]: [] });
        setSuggestionsVisible((prev) => ({ ...prev, [name]: false }));
    };

    const handleKeyDown = (event, name) => {
        const currentSuggestions = filteredSuggestions[name] || [];
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const newIndex = (activeSuggestion[name] + 1) % currentSuggestions.length;
            setActiveSuggestion({ ...activeSuggestion, [name]: newIndex });
            scrollToSuggestion(name, newIndex);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            const newIndex = (activeSuggestion[name] - 1 + currentSuggestions.length) % currentSuggestions.length;
            setActiveSuggestion({ ...activeSuggestion, [name]: newIndex });
            scrollToSuggestion(name, newIndex);
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (activeSuggestion[name] >= 0) {
                selectSymptom(name, currentSuggestions[activeSuggestion[name]]);
            }
        }
    };

    const scrollToSuggestion = (name, index) => {
        if (suggestionRefs.current[name]) {
            const list = suggestionRefs.current[name];
            const activeItem = list.children[index];
            if (activeItem) {
                activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }
    };

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setSuggestionsVisible({});
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const predictDisease = async () => {
        try {
            const filteredSymptoms = Object.values(symptoms).filter(symptom => symptom.trim());
            if (filteredSymptoms.length < 2) {
                alert('Please enter at least two symptoms.');
                return;
            }

            const response = await axios.post('http://127.0.0.1:5000/predict', {
                symptoms: filteredSymptoms,
            });

            setPredictionResult(response.data);
            setError(null);
            setLoading(false);
        } catch (error) {
            setError(error.response?.data.error || 'An unknown error occurred.');
            setPredictionResult(null);
        }
    };

    const handleToggleHealthTips = () => {
        setShowHealthTips(prev => !prev);
    };

    return (
        <div ref={formRef}>
            <h1 className='predict-disease-main-heading text-uppercase'>Disease Prediction System</h1>
            <div className='predict-disease-card'>
                <div className='predict-disease-container'>
                    <div className='predict-disease-container-heading'>
                        <h1 className='text-uppercase'>Check Your Disease</h1>
                    </div>

                    <div className="predict-disease-form-card">
                        {Object.keys(symptoms).map((key, index) => (
                            <div key={key} className="symptom-label">
                                <label>
                                    <p className="symptom-description">{`Symptom ${index + 1}:`}</p>
                                    <input
                                        className="symptom-input"
                                        type="text"
                                        name={key}
                                        value={symptoms[key]}
                                        onChange={handleInputChange}
                                        onKeyDown={(event) => handleKeyDown(event, key)}
                                        placeholder={`Enter symptom ${index + 1}`}
                                    />
                                    <button type="button" onClick={() => removeSymptom(key)}>
                                        x
                                    </button>
                                </label>
                                {isSuggestionsVisible[key] && filteredSuggestions[key] && filteredSuggestions[key].length > 0 && (
                                    <ul
                                        className="suggestion-list"
                                        ref={(el) => {
                                            suggestionRefs.current[key] = el;
                                        }}
                                    >
                                        {filteredSuggestions[key].map((suggestion, idx) => (
                                            <li
                                                key={idx}
                                                onClick={() => selectSymptom(key, suggestion)}
                                                className={
                                                    activeSuggestion[key] === idx ? "active-suggestion" : ""
                                                }
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='predict-disease-button-container'>
                        <button type="button" className='predict-disease-button' onClick={predictDisease}>
                            Predict Disease
                        </button>
                    </div>

                    {predictionResult && (
                        <div className='predict-result'>
                            <h2 className='predict-result-heading'>Prediction Result:</h2>
                            <p className='predict-result-description'>
                                <strong>Disease:</strong> {predictionResult.predicted_disease}
                            </p>
                            <p className='predict-result-description'>
                                <strong>Probability:</strong> {predictionResult.predicted_probability}
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className='predict-result'>
                            <h2 className='predict-result-heading'>Error:</h2>
                            <p className='predict-result-description'>{error}</p>
                        </div>
                    )}

                </div>

                {predictionResult && predictionResult.predicted_disease && (
                    <div className='health-info'>
                        <button className='health-tip-button' onClick={handleToggleHealthTips}>
                            Health Tips for {predictionResult.predicted_disease}
                        </button>
                        {showHealthTips && (
                            <div className='health-info-content'>
                                <h3 className='health-info-heading'>Health Information:</h3>
                                <p className='health-info-tips'>
                                    <strong>Health Tips:</strong> {healthConditions[predictionResult.predicted_disease]["Health Tips"]}
                                </p>
                                <h4>Do's:</h4>
                                <ul className='health-info-dos'>
                                    {healthConditions[predictionResult.predicted_disease]["Do's"].map((doItem, index) => (
                                        <li key={index}>{doItem}</li>
                                    ))}
                                </ul>
                                <h4>Don'ts:</h4>
                                <ul className='health-info-donts'>
                                    {healthConditions[predictionResult.predicted_disease]["Don'ts"].map((dontItem, index) => (
                                        <li key={index}>{dontItem}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PredictDisease;
