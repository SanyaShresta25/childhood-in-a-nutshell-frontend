# ✨ Childhood in a Nutshell

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/SanyaShresta25/disney-character-app/actions)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Deployed on](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com)

---

An interactive Disney character storybook application built with a modern full-stack setup: **React + TypeScript + Tailwind CSS** for the frontend, **Flask** for the backend API, and an integrated **machine learning model** for character suggestions. The project is containerized using **Docker** for seamless deployment.

---

## Preview

<img src="my-app\public\preview.jpg" alt="Childhood in a Nutshell" width="600"/>


## 🧰 Tech Stack

### Frontend
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![LocalStorage](https://img.shields.io/badge/localStorage-FFD700?style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Backend
[![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Flask-CORS](https://img.shields.io/badge/Flask--CORS-007BFF?style=flat)](https://flask-cors.readthedocs.io/)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white)](https://pandas.pydata.org/)

### Machine Learning
- ML model to recommend similar characters using embedding similarity
- Custom route powered by `mlModelClient.ts` on frontend

### DevOps
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
- Multi-stage Dockerfile for frontend and backend
- Separate containerized services for web and API

---

## 🎯 Features

- 🔍 **Search** for characters by name
- 🎲 **Random Character** discovery
- 🏰 **Show All** available characters
- 💖 **Favorites Panel** using localStorage
- 🧠 **Similar Character Suggestions** via ML
- 📁 **Export Favorites to CSV**
- 🧸 **Sticker Decorations** for Disney flair
- 🌗 **Theme Toggle** (Light/Dark mode)

---

## 🐳 Dockerized Setup

```bash
# Build containers
docker-compose build

# Run containers
docker-compose up
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 🗂️ Folder Structure

```
root
│
├── backend
│   ├── app.py
│   └── disney-characters.csv
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── hooks
│   │   ├── utils
│   │   └── types.ts
│   └── public
│       ├── sofia.png, olaf.png, etc.
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 📦 Installation (Dev Mode)

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```

---

## 👩‍💻 Author

**Sanya Shresta Jathanna**

[![GitHub](https://img.shields.io/badge/GitHub-SanyaShresta25-black?style=flat&logo=github)](https://github.com/SanyaShresta25)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/sanya-shresta-jathanna)
[![Portfolio](https://img.shields.io/badge/Portfolio-Website-purple)](https://sanyashresta.netlify.app/)

---

Enjoy the magic ✨
