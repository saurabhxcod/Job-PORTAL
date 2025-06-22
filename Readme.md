# 🤝🏼 Job Portal – Full Stack Project

A full-featured Job Portal application built with a robust **MERN** architecture (MongoDB, Express, React, Node.js), featuring modern UI components using **ShadCN UI** and a cleanly organized backend powered by **MVC** design principles.

---

## 🔠 Tech Stack

| Layer    | Technology                             |
| -------- | -------------------------------------- |
| Frontend | React, ShadCN UI, Tailwind CSS         |
| Backend  | Node.js, Express.js, MongoDB, Mongoose |
| Auth     | JWT-based Authentication               |
| Tools    | Axios, dotenv                          |

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
```

---

## 📌 Features

### ✅ Backend

* User Authentication (Register, Login)
* Role-based Access (Admin, Job Seeker, Company)
* CRUD for:

  * Jobs
  * Companies
  * Applications
* Apply to Jobs
* Admin can view applicants
* Error handling and validation middleware

### 🎨 Frontend (React + ShadCN UI)

* Modern, responsive UI
* Login/Register forms
* Post job (for companies)
* Apply to job (for users)
* Dashboard for user/company/admin
* Job listing page with filters and details

---

## 🧲 API Testing

* All APIs tested with **Postman**
* Use token-based headers (`Authorization: Bearer <token>`) for protected routes

---

## ✨ Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

`.env` should include:

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

`.env` should include:

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

Contributions are welcome! Please open issues or PRs.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
