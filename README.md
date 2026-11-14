# 🏥 SymptomCheckerAI - AI-Powered Disease Prediction System

## 🎯 Project Overview

**SymptomCheckerAI** is an intelligent healthcare web application that leverages machine learning to predict diseases based on user-reported symptoms. The system provides accurate disease predictions with confidence scores, hospital recommendations, and a comprehensive healthcare management platform.

### 🌟 Key Features
- **AI Disease Prediction**: Advanced ML model with 95%+ accuracy
- **Symptom Analysis**: Real-time symptom processing and disease mapping
- **Hospital Search**: Location-based hospital recommendations
- **User Management**: Secure authentication and profile management
- **Admin Dashboard**: Comprehensive analytics and user management
- **Responsive Design**: Mobile-first approach with modern UI/UX

## 🛠️ Technology Stack

### Backend
- **Python Flask**: RESTful API development
- **Machine Learning**: Scikit-learn, Pandas, NumPy
- **Database**: MongoDB Atlas (Cloud)
- **Authentication**: JWT tokens
- **Security**: Bcrypt password hashing

### Frontend
- **React.js**: Modern UI framework
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Backend API framework
- **CSS3**: Responsive styling
- **React Router**: Client-side routing

## 📋 Prerequisites

Before running this project, ensure you have:
- Python 3.7+ installed
- Node.js 14+ and npm
- MongoDB Atlas account (for database)
- Git for version control

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/SymptomCheckerAI.git
cd SymptomCheckerAI
```

### 2. Backend Setup (Flask - Disease Prediction API)

#### Install Python Dependencies
```bash
pip install flask flask-cors scikit-learn pandas numpy joblib
```

#### Run Flask Server
```bash
python app.py
```
- Server runs on: `http://localhost:5000`

### 3. Frontend Setup (React Application)

#### Navigate to Frontend Directory
```bash
cd frontend
```

#### Install Dependencies
```bash
npm install
cd client
npm install
cd ..
```

#### Run Development Server
```bash
npm run dev
```
- Frontend runs on: `http://localhost:3000`

### 4. Backend API Server (Express - User Management)

#### From frontend directory
```bash
npm run dev
```
- API server runs on: `http://localhost:5000`

## 📊 Project Structure

```
SymptomCheckerAI/
├── app.py                          # Flask ML API
├── final_model (1).pkl            # Trained ML model
├── README.md
├── frontend/
│   ├── server.js                   # Express API server
│   ├── middleware.js               # Authentication middleware
│   ├── model.js                    # MongoDB user model
│   ├── package.json
│   └── client/                     # React application
│       ├── public/
│       └── src/
│           ├── components/
│           │   ├── pages/          # React components
│           │   ├── section/        # Layout components
│           │   └── scripts/        # CSS styles
│           └── App.js
```

## 🔧 API Endpoints

### Disease Prediction API (Flask - Port 5000)
- `POST /predict` - Predict disease from symptoms
- `GET /` - Health check endpoint

### User Management API (Express - Port 5000)
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /` - Get user profile (protected)
- `POST /send-email` - Contact form submission

### Frontend Routes (React - Port 3000)
- `/` - Home page
- `/login` - User login
- `/register` - User registration
- `/dashboard` - User dashboard
- `/predictDisease` - Disease prediction interface
- `/hospitals` - Hospital search
- `/adminstration` - Admin panel
- `/about` - About page
- `/contact` - Contact page

## 🎯 Core Features

### 1. Disease Prediction
- Input: Multiple symptoms selection
- Output: Predicted disease with confidence score
- Model: Trained on comprehensive medical dataset

### 2. Hospital Search
- Location-based hospital recommendations
- Filter by specialty and ratings
- Contact information and directions

### 3. User Management
- Secure registration/login
- Profile management
- Session management with JWT

### 4. Admin Dashboard
- User analytics
- System monitoring
- Content management

## 🔐 Security Features
- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Rate limiting

## 📱 Responsive Design
- Mobile-first approach
- Cross-browser compatibility
- Modern UI/UX design
- Accessibility features

## 🧪 Testing
- Manual testing for all features
- Cross-device compatibility testing
- Performance optimization
- Security testing

## 🚀 Future Enhancements
- Integration with real-time health APIs
- Telemedicine features
- Multi-language support
- Advanced analytics dashboard
- Mobile app development

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support
For support, email: galekkala5@gmail.com or join our Slack channel.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team
- **Project Lead**: [Daggumalli Abhishakth](https://github.com/Abhishakth007)
- **ML Engineer**: [M. Sivarama Krishna](https://github.com/SivaMusada) & [P. Raja Kumar Reddy](https://github.com/Rajkumarreddy04)
- **Frontend Developer**: [Lekkala Ganesh](https://github.com/LEKKALAGANESH)
- **Backend Developer**: [Lekkala Ganesh](https://github.com/LEKKALAGANESH)

- **Guided By**: Mr. Rajat Kumar [Asst. Professor, CSE Department, PIET, Parul University.]

---
**Built with ❤️ for better healthcare accessibility**
