# MacroMate – AI-Powered Macro & Meal Tracker

MacroMate is a full-stack nutrition tracker that helps users log meals, track macros, and get AI-powered food suggestions. Built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Vite** for ultra-fast frontend development, MacroMate aims to make clean eating and calorie tracking effortless.

---

## Features

-  User authentication (JWT login/register)
-  Meal logging by category (breakfast, lunch, dinner, snacks)
-  Daily macro & calorie summary
-  Food search via Edamam API
-  AI-powered meal parsing & smart food suggestions (OpenAI)
-  Nutrition history by day
-  Macro goal setting & user preferences
-  Unit & integration tests (frontend + backend)
-  CI/CD with GitHub Actions

---

## 🧱 Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React + TypeScript + Vite + Tailwind CSS |
| Backend     | Node.js + Express + MongoDB (Mongoose) |
| Auth        | JWT + bcrypt                 |
| AI          | OpenAI API (GPT)             |
| DB Hosting  | MongoDB Atlas                |
| Deployment  | Vercel (frontend), Render/Railway (backend) |
| CI/CD       | GitHub Actions               |
| Testing     | Jest + React Testing Library + Supertest |

---

##  Local Development Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/macromate-mern.git
cd macromate-mern

```
### 2. Install Dependencies 

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Create .env files 


### 4. Run Dev servers 


### 5. Visit the app 

## Testing 

### Frontend 


### Backend 


## Project structure 

```bash
macromate-mern/
├── client/        → Vite + React + Tailwind frontend
├── server/        → Express + MongoDB backend with API & AI routes
├── .github/       → GitHub Actions CI/CD
└── docker-compose.yml 

```

## AI Features (Planned/Active)

- POST /api/ai/suggest → Suggest meals based on your macros

- POST /api/ai/parse-meal → Convert a meal description into structured food items

- Future: AI meal coach for long-term goal optimization


## Planned Imporvements 
 - Dark mode toggle

 - Chart visualizations for weekly progress

 - Community recipe sharing

 - Push notification reminders

 