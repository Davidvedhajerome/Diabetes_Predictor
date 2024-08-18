import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm
app = Flask(__name__)
CORS(app)
try:
    url = 'https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv'
    column_names = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI',
                    'DiabetesPedigreeFunction', 'Age', 'Outcome']
    diabetes_dataset = pd.read_csv(url, names=column_names)
    X = diabetes_dataset.drop(columns='Outcome')
    Y = diabetes_dataset['Outcome']
    scaler = StandardScaler()
    X_standardized = scaler.fit_transform(X)
    X_train, X_test, Y_train, Y_test = train_test_split(X_standardized, Y, test_size=0.2, random_state=2)
    classifier = svm.SVC(kernel='linear')
    classifier.fit(X_train, Y_train)
except Exception as e:
    diabetes_dataset = None
@app.route('/predict', methods=['POST'])
def predict():
    if diabetes_dataset is None:
        return jsonify({'error': 'Dataset not loaded. Cannot make predictions.'}), 500
    try:
        data = request.json
        input_data = [data.get(feature, 0) for feature in diabetes_dataset.columns[:-1]]
        if len(input_data) != len(diabetes_dataset.columns) - 1:
            return jsonify({'error': 'Invalid number of features provided'}), 400
        input_data = np.array(input_data).reshape(1, -1)
        std_data = scaler.transform(input_data)
        prediction = classifier.predict(std_data)[0]
        response = {
            'message': 'You Have Diabetic' if prediction == 1 else "You Don't Have Diabetic"
        }
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)
