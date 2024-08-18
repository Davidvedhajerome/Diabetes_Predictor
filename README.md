
# Diabetes Prediction App

This project is a web application that predicts whether a person has diabetes based on various health metrics and svm model. It uses a machine learning model trained on the Pima Indians Diabetes dataset and is implemented with a Flask backend and a React frontend.

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [License](#license)

## Technologies

- **Backend:** Flask, Pandas, Scikit-learn
- **Frontend:** React, Axios
- **Machine Learning Model:** Support Vector Classifier (SVM)

## Setup

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/diabetes-prediction-app.git
   cd diabetes-prediction-app
   ```

2. **Create a virtual environment:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install the required packages:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask app:**

   ```bash
   python app.py
   ```

   The backend should now be running on `http://127.0.0.1:5000/`.

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install the required packages:**

   ```bash
   npm install
   ```

3. **Start the React app:**

   ```bash
   npm start
   ```

   The frontend should now be running on `http://localhost:3000/`.

## Usage

1. Open the frontend in your browser by navigating to `http://localhost:3000/`.
2. Fill out the form with the necessary health metrics.
3. Submit the form to get a prediction of whether the individual has diabetes.

## Project Structure

```
.
├── app.py                  # Backend Flask application
├── requirements.txt        # Python dependencies
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── Diabetes.js # Main React component for prediction
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md               # Project documentation
```

## Endpoints

- **POST `/predict`:** Accepts a JSON payload with the following fields:
  - `Pregnancies`
  - `Glucose`
  - `BloodPressure`
  - `SkinThickness`
  - `Insulin`
  - `BMI`
  - `DiabetesPedigreeFunction`
  - `Age`
  
  Returns a prediction indicating whether the individual is diabetic or not.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
