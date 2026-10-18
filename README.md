# 🚀 Express Backend Boilerplate (TypeScript)

A production-ready, highly secure, and scalable **Node.js & Express** backend starter kit built with **TypeScript**. Pre-configured with industry-standard security layers, MongoDB connection, rate limiting, and a clean modular architecture.

---

## ✨ Features

- **🛡️ Enterprise Security**: Protected against common web vulnerabilities (Helmet, HPP, NoSQL Injection, CORS, Rate Limiting).
- **📘 TypeScript Powered**: Fully typed environment with auto-completion and compile-time error checking.
- **🍃 MongoDB & Mongoose Integration**: Clean and asynchronous connection handling.
- **🔑 Authentication & Validation**: Configured with JWT, BcryptJS, Joi validation, and Google Auth setup.
- **📁 Modular Architecture**: Standardized `MVC` folder structure (`routes`, `models`, `middlewares`, `controllers`).
- **⚡ Dev-Friendly**: Live-reloading during development using `nodemon` and `ts-node`.

---

## 🛠️ Security Middlewares Included

| Package | Purpose |
| :--- | :--- |
| **`helmet`** | Sets various security-related HTTP response headers. |
| **`express-rate-limit`** | Protects against Brute-Force and DoS/DDoS attacks. |
| **`express-mongo-sanitize`** | Prevents NoSQL Injection attacks by sanitizing payload data. |
| **`hpp`** | Protects against HTTP Parameter Pollution. |
| **`cors`** | Configures Cross-Origin Resource Sharing. |

---

## 📁 Project Structure

```text
├── src/
│   ├── config/          # Environment variables & DB connection
│   ├── controllers/     # Request handlers / Business logic
│   ├── middlewares/     # Auth, Security, Error Handler & Rate Limiters
│   ├── models/          # Mongoose Schemas & Data models
│   ├── routes/          # Express route definitions
│   ├── utils/           # Helper functions & Utilities
│   ├── app.ts           # Express app setup & Middlewares configuration
│   └── server.ts        # Server entry point & DB Initialization
├── .env.example         # Template for Environment variables
├── tsconfig.json        # TypeScript Configuration
└── package.json         # Project Dependencies
```

---

## 🚦 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **MongoDB** installed on your system.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/shbhalshbh67-tech/Express-Backend-Setup.git
cd Express-Backend-Setup
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory based on `.env.example`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/my_database
JWT_SECRET=your_super_secret_jwt_key
```

### 4. Running the Server

- **Development Mode** (with live reload):
  ```bash
  npm run dev
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Start Production Server**:
  ```bash
  npm start
  ```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
