# ✨ Childhood in a Nutshell

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/SanyaShresta25/disney-character-app/actions)
[![Made with](https://img.shields.io/badge/made%20with-TypeScript-blue)](https://www.typescriptlang.org/)
[![Deployed on](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com)

---

An interactive Disney character storybook application built with a modern full-stack setup: **React + TypeScript + Tailwind CSS** for the frontend, **Flask** for the backend API, and an integrated **machine learning model** for character suggestions. The project is containerized using **Docker** for seamless deployment.

---

## 🧰 Tech Stack

### Frontend
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- LocalStorage (Favorites)
- Vite

### Backend
- [Flask](https://flask.palletsprojects.com/)
- Flask-CORS
- Pandas
- REST API routes: `/characters`, `/random`, `/hero/<name>`

### Machine Learning
- ML model to recommend similar characters using embedding similarity
- Custom route powered by `mlModelClient.ts` on frontend

### DevOps
- [Docker](https://www.docker.com/)
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
