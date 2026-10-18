# 🎮 Gaming Gear Hub

A premium, modern marketplace for gaming accessories with a beautiful, responsive user interface.

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation and Setup](#-installation-and-setup)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## 📖 Overview

**Gaming Gear Hub** is a full-stack e-commerce platform designed to showcase a curated collection of gaming accessories, including controllers, headsets, keyboards, mousepads, and other gaming essentials.

The frontend features a sleek, modern interface with glassmorphism effects, smooth gradients, subtle animations, responsive layouts, and dark-mode support.

The backend provides a REST API built with Node.js and Express.js, with MongoDB for persistent data storage.

## ✨ Features

- 🖥️ **Responsive Design** — Optimized for mobile, tablet, and desktop devices.
- 🛒 **Dynamic Product Catalog** — Retrieves product information through a backend API.
- 🧺 **Shopping Cart** — Add, remove, and manage products in the cart.
- 🎨 **Modern UI** — Glassmorphism cards, smooth transitions, gradients, and animations.
- 🌙 **Dark Mode** — Theme support based on user preferences.
- 🗄️ **Database Integration** — MongoDB integration for persistent product data and order history.
- ⚡ **Fast Development** — Vite-powered frontend development and hot module replacement.
- 🔌 **REST API** — Backend endpoints for managing application data.

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6+), React |
| Styling | Tailwind CSS, vanilla CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Build Tool | Vite |
| Environment Configuration | dotenv |
| API and Middleware | REST API, CORS |
| Package Manager | npm |
| Version Control | Git and GitHub |

## 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — Version 18 or newer
- [npm](https://www.npmjs.com/) — Included with Node.js
- [Git](https://git-scm.com/) — For version control
- [MongoDB](https://www.mongodb.com/) — Local installation or MongoDB Atlas account

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Shayan121363/gaming-gear-hub.git
cd gaming-gear-hub
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gaming_gear_hub
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Update these values according to your database configuration and application setup.

## ▶️ Running the Application

### Start the backend

Open a terminal and run:

```bash
cd backend
npm run dev
```

The backend API will run on port `5000`, provided the configured development script uses that port.

### Start the frontend

Open another terminal and run:

```bash
cd frontend
npm run dev
```

Vite will display the local development URL in your terminal, typically:

```text
http://localhost:5173
```

Open the displayed URL in your browser to explore Gaming Gear Hub.

**Note:** Ensure MongoDB is running and the frontend API URL matches your backend configuration. The commands above assume your `package.json` files contain the corresponding scripts.

## 📁 Project Structure

```text
gaming-gear-hub/
├── backend/
│   ├── models/
│   │   └── Gear.js
│   ├── routes/
│   │   ├── gearRoutes.js
│   │   ├── gameRoutes.js
│   │   └── paymentRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── LICENSE
└── README.md
```

*The structure above is a reference. Adjust it to match the actual files and directories in your repository.*

## ⚙️ Environment Variables

### Backend

| Variable | Description | Example |
|---|---|---|
| `PORT` | Port used by the backend server | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/gaming_gear_hub` |

### Frontend

| Variable | Description | Example |
|---|---|---|
| `VITE_API_BASE_URL` | Base URL for backend API requests | `http://localhost:5000/api` |

**Security:** Never commit `.env` files, database credentials, API keys, or other secrets to GitHub. Add environment files to `.gitignore` and provide a `.env.example` file containing placeholder values instead.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/awesome-feature
   ```

3. Make your changes and test them.
4. Commit your changes:

   ```bash
   git commit -m "feat: add awesome feature"
   ```

5. Push your branch:

   ```bash
   git push origin feature/awesome-feature
   ```

6. Open a Pull Request describing your changes.

Please keep contributions respectful, constructive, and focused on improving the project.

## 📞 Contact

**Project Creator & Maintainer:** Shayan Ahmed

- **GitHub:** (https://github.com/Shayan121363)
- **LinkedIn:** (https://www.linkedin.com/in/shayan-ahmed-dev)

For bug reports, feature requests, or questions, feel free to open an issue in the repository.

---

⭐ If you find this project useful, consider giving it a star!

**Built with Love for the gaming community.**
