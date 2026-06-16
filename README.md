# 🤖 AI Code Reviewer

> An interactive, full-stack web application that provides **real-time AI feedback** on your code — covering performance, readability, and security.

![Tech Stack](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react)
![Tech Stack](https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-339933?style=flat&logo=node.js)
![Tech Stack](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=flat&logo=google)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat&logo=javascript)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Data Flow](#-data-flow)



---

## 🌟 Overview

**AI Code Reviewer** is a developer tool that lets you paste or write any code snippet and instantly receive structured, AI-generated feedback. The app analyses your code for:

- 🐛 **Bugs & logical errors**
- ⚡ **Performance improvements**
- 📖 **Readability & naming conventions**
- 🔒 **Security vulnerabilities**
- 🔧 **Refactoring suggestions**

Built with a clean split between a React frontend (syntax-highlighted editor) and a Node.js/Express backend (AI integration), it demonstrates a complete fullstack AI-powered workflow.

---

## ✨ Features

- **Live Code Editor** — Powered by `react-simple-code-editor` with syntax highlighting via `PrismJS`
- **AI-Powered Reviews** — Sends code to a backend API connected to Google Gemini / OpenAI for deep code analysis
- **Markdown Rendering** — AI feedback is displayed in a beautifully formatted, human-readable layout using `react-markdown` and `rehype-highlight`
- **Real-time Loading States** — Async feedback with clear loading indicators and error handling
- **GitHub Dark Theme** — Syntax highlighting styled with Highlight.js GitHub Dark theme
- **Full-Stack Architecture** — Clean separation of concerns between frontend and backend

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Axios, PrismJS, react-simple-code-editor, react-markdown |
| **Backend** | Node.js, Express, CORS |
| **AI Integration** | Google Gemini / OpenAI GPT |
| **Styling** | CSS3 (Flexbox), Highlight.js (GitHub Dark theme) |
| **Language** | JavaScript (79.1%), CSS (17.7%), HTML (3.2%) |

---

## 📁 Project Structure

```
Code-Reviewer/
├── BackEnd/
│   ├── src/
│   │   └── ...          # Express routes, AI integration logic
│   ├── package.json
│   └── .env             # API keys (not committed)
│
├── Frontend/
│   ├── src/
│   │   ├── components/  # Editor and Review panel components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- `npm` or `yarn`
- A **Google Gemini API key** (or OpenAI API key)

---

### 1. Clone the Repository

```bash
git clone https://github.com/nik1910-sd/Code-Reviewer.git
cd Code-Reviewer
```

---

### 2. Backend Setup

```bash
cd BackEnd
npm install
```

Create a `.env` file in the `BackEnd` directory and add your AI API key:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
# or
OPENAI_API_KEY=your_openai_api_key_here

PORT=3000
```

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:3000`

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default)

---

### 4. Open in Browser

Navigate to `http://localhost:5173`, write or paste your code in the editor, and click **Review** to get instant AI feedback.

---

## 💡 How It Works

```
1️⃣  INPUT      →  User writes/pastes code in the left-side editor panel

2️⃣  REQUEST    →  Clicking "Review" fires an async POST request via Axios
                   to the Node.js backend with the code as the payload

3️⃣  PROCESSING →  Backend receives the code, constructs a specialized
                   prompt for code auditing, and sends it to the AI model
                   (Gemini / GPT)

4️⃣  RESPONSE   →  AI returns a structured Markdown review covering bugs,
                   performance, readability, and security

5️⃣  RENDER     →  Frontend parses the Markdown via react-markdown and
                   displays a clean, syntax-highlighted review panel
```

---

## 🔄 Data Flow

```
User (Code Input)
        │
        ▼
  React Frontend
  (Editor Panel)
        │
        ▼
  Axios POST /review
        │
        ▼
  Node.js / Express Backend
        │
        ▼
  AI Model (Gemini / GPT)
  [Code Audit Prompt]
        │
        ▼
  Markdown Review Response (JSON)
        │
        ▼
  React State Update
        │
        ▼
  react-markdown Renderer
        │
        ▼
  Formatted Review UI (Right Panel)
```

---



## 👤 Author

**nik1910-sd**
- GitHub: [@nik1910-sd](https://github.com/nik1910-sd)

---

> ⭐ If you found this project helpful, give it a star on GitHub!
