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
