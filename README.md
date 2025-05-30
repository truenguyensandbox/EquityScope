# EquityScope

This repository contains the EquityScope project.

---

## Frontend - React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🏛️ EquityScope

**An AI-powered SaaS dashboard that reveals institutional ownership patterns across the S&P 500 and Dow Jones.**  
Built for radical transparency. Deployed with love (and fire) via Render.

---

## 🚀 Live Demo

> Coming soon: [equityscope.onrender.com](https://equityscope.onrender.com)

---

## 📦 Tech Stack

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Django + PostgreSQL
- **APIs:** Financial Modeling Prep (FMP) + OpenAI GPT
- **Deployment:** Render (static + web service)

---

## ⚙️ Features

- 📊 **Ownership Breakdown**: Visualize which firms control which companies
- 🔍 **Search by Ticker**: Enter any S&P or Dow ticker to analyze ownership
- 🤖 **ChatGPT Integration**: Get summaries of complex data using AI
- 📉 **Charts & Tables**: Intuitive visualizations for fast insight
- 🔐 **No User Tracking**: Built with privacy and ethics in mind

---

## 🔧 Local Setup

Clone this repo:

```bash
git clone https://github.com/truenguyensandbox/EquityScope.git
cd EquityScope
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd ../backend
pip install -r requirements.txt
python manage.py runserver
```

### Environment Variables

Create a `.env` file in the backend root:

```bash
OPENAI_API_KEY=your-key-here
DJANGO_SECRET_KEY=your-secret-here
```

---

## 🧠 Philosophy

> *"Stealing source code since '98."*  
> This project is part of a larger mission to illuminate systems of power, challenge algorithmic control, and encourage human-AI collaboration that’s rooted in ethics and clarity.

Built by [True Nguyen](https://www.github.com/truenguyensandbox) — a self-taught developer forging a new path in tech.  
No degree. No gatekeepers. Just truth, code, and a vision.

---

## ❤️ Footer Phrase

> 💖 *“Data is power. May yours be wielded consciously.”*

---

## 🛡️ License

This project is open source under the [MIT License](LICENSE).
