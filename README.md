
# 🚀 ShifraAI


<div align="center">

### 🧠 AI-Powered SaaS Platform for Smarter Conversations & Productivity

Build, interact, and scale with an intelligent AI assistant powered by modern web technologies.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase)
![Razorpay](https://img.shields.io/badge/Razorpay-0C73FE?style=for-the-badge&logo=razorpay)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge)

</div>

---

## 📖 About

**ShifraAI** is a modern **AI-powered SaaS platform** that enables users to interact with an intelligent assistant through a clean and responsive interface.

The platform combines **secure authentication, subscription management, payment integration, and AI capabilities** to deliver a seamless user experience. Built with scalability and performance in mind, ShifraAI leverages a modern MERN architecture and cloud services to provide reliable and efficient AI interactions.

Whether you're looking for productivity, learning, or intelligent assistance, ShifraAI offers a fast and intuitive experience.

---

## ✨ Features

- 🤖 AI-powered conversations using **Google Gemini**
- 🔐 Secure Authentication with **Firebase**
- 💳 Subscription & Payment Integration with **Razorpay**
- 👤 User Account Management
- 📊 Billing & Subscription Tracking
- ⚡ Lightning Fast React + Vite Frontend
- 🌐 RESTful Express Backend
- 🗄️ MongoDB Database Integration
- 📱 Fully Responsive UI
- 🔒 Secure Environment Variable Management
- 🚀 Scalable SaaS Architecture

---

## 🏗️ Tech Stack

### Frontend

- React.js
- Vite
- CSS
- Firebase Authentication

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### AI

- Google Gemini API

### Payments

- Razorpay

### Database

- MongoDB Atlas

### Tools

- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```text
ShifraAI/
│
├── Client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Server/
│   ├── Controllers/
│   ├── Routes/
│   ├── Models/
│   ├── Middleware/
│   ├── Configs/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/ShifraAI.git
cd ShifraAI
```

### 2️⃣ Install Client Dependencies

```bash
cd Client
npm install
```

### 3️⃣ Install Server Dependencies

```bash
cd ../Server
npm install
```

---

## 🔑 Environment Variables

### Client `.env`

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_RAZORPAY_KEY_ID=your_key
```

### Server `.env`

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key
RAZORPAY_KEY_SECRET=your_secret
```

> ⚠️ Never commit your `.env` files to GitHub.

---

## ▶️ Running the Project

### Start Backend

```bash
cd Server
npm run dev
```

### Start Frontend

```bash
cd Client
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🔄 Workflow

```text
User
   │
   ▼
React Frontend
   │
   ▼
Express Backend
   │
 ┌─┴─────────────┐
 ▼               ▼
Gemini API    MongoDB
 ▼
AI Response
```

---

## 💳 SaaS Flow

```text
User Registration
        │
        ▼
Firebase Authentication
        │
        ▼
Choose Subscription
        │
        ▼
Razorpay Payment
        │
        ▼
Access Premium AI Features
```

---

## 🚀 Future Improvements

- 💬 Chat History
- 🌙 Dark Mode
- 📁 File Upload Support
- 🖼️ Image Generation
- 📱 Mobile App
- 🔔 Notifications
- 👥 Team Collaboration
- 📊 Analytics Dashboard

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 🛡️ Security

- Environment variables are securely managed.
- Authentication handled through Firebase.
- Payment processing secured via Razorpay.
- Sensitive credentials are never exposed to the client.

---

## 📸 Screenshots

> Add screenshots or GIFs of your application here.

| Home | Dashboard | AI Chat |
|------|-----------|---------|
| ![](screenshots/home.png) | ![](screenshots/dashboard.png) | ![](screenshots/chat.png) |

---

## 📈 Why ShifraAI?

✔ Modern SaaS Architecture  
✔ AI-Powered Experience  
✔ Secure Authentication  
✔ Payment Integration  
✔ Scalable Backend  
✔ Responsive UI  
✔ Production Ready

---

## 👨‍💻 Author

**Harish Birla**

Computer Science Engineer | Full Stack Developer | AI Enthusiast

- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a Star!

**Made with ❤️ using React, Node.js, MongoDB & Gemini AI**

</div>
