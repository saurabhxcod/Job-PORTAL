
# 🤝🏼 Job Junction – Full Stack MERN Project

[![GitHub Repo stars](https://img.shields.io/github/stars/yourusername/job-portal?style=social)](https://github.com/yourusername/job-portal) [![GitHub issues](https://img.shields.io/github/issues/yourusername/job-portal)](https://github.com/yourusername/job-portal/issues) [![License](https://img.shields.io/github/license/yourusername/job-portal)](LICENSE)  

---

## 🛠️ Tech & Tools

![React](https://img.shields.io/badge/React-18.x-blue?logo=react&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-4.x-black?logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen?logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-6.x-red?logo=mongodb&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue?logo=tailwind-css&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-auth-orange) ![Axios](https://img.shields.io/badge/Axios-1.x-blue) ![Postman](https://img.shields.io/badge/Postman-8.x-orange)

---

## 🌐 Live Demo

> Coming soon – deploy on Vercel/Netlify for frontend and Render/Heroku for backend

---

## 🔠 Tech Stack

| Layer    | Technology                             |
| -------- | -------------------------------------- |
| Frontend | React, ShadCN UI, Tailwind CSS         |
| Backend  | Node.js, Express.js, MongoDB, Mongoose |
| Auth     | JWT-based Authentication               |
| Tools    | Axios, dotenv, Postman                  |

---

## 📁 Project Structure

```bash
backend/
├── Controllers/
├── Middleware/
├── Models/
├── Routes/
├── utils/
├── server.js
└── .env
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── main.jsx
````

---

## ⚡ Features

### ✅ Backend

* User Authentication (Register/Login)
* Role-based Access (Admin, Job Seeker, Company)
* CRUD Operations:

  * Jobs
  * Companies
  * Applications
* Apply to Jobs
* Admin dashboard to view applicants
* Error handling and validation middleware

### 🎨 Frontend (React + ShadCN UI)

* Responsive, modern design
* Login/Register forms
* Post and manage jobs (for companies)
* Apply to jobs (for users)
*gar chaho, mai isse aur **modern aur colorful bana ke GitHub pe pro-style README** bana du, jisme emojis, colored badges aur sections ho, jaise top open-source projects me hota hai.  

Kya mai wo version bhi bana doon? Dashboard for users, companies, and admin
* Job listing page with filters and details

---

## 🧪 API Testing

* All APIs tested using **Postman**
* Protected routes require token headers:

```http
Authorization: Bearer <token>
```

---

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

**.env** file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

**.env** file:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

---

## 📦 API Endpoints (Sample)

| Method | Endpoint                             | Description              |
| ------ | ------------------------------------ | ------------------------ |
| POST   | `/api/v1/user/register`              | Register a new user      |
| POST   | `/api/v1/user/login`                 | Login user               |
| POST   | `/api/v1/job/post`                   | Create a job (Company)   |
| GET    | `/api/v1/job/all`                    | List all jobs            |
| GET    | `/api/v1/application/get`            | Get user's applied jobs  |
| POST   | `/api/v1/application/apply/:id`      | Apply to job             |
| GET    | `/api/v1/job/admin`                  | Get jobs posted by admin |
| GET    | `/api/v1/application/:id/applicants` | Applicants for job       |

---


## 👍 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

```

