# 🚀 AI Code Reviewer

An interactive, full-stack web application that provides real-time AI feedback on your code. Built with a modern **React** frontend and a **Node.js/Express** backend, this tool allows developers to write code in a syntax-highlighted editor and receive professional refactoring advice instantly.

---

## ✨ Features

* **Live Code Editor:** Powered by `react-simple-code-editor` with syntax highlighting via `Prismjs`.
* **AI Insights:** Sends code to a backend API to receive structured feedback on performance, readability, and security.
* **Markdown Support:** Displays AI reviews in a beautiful, readable format using `react-markdown` and `rehype-highlight`.
* **Real-time Feedback:** Includes loading states and comprehensive error handling for a seamless experience.

---

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React, Axios, PrismJS, React-Markdown |
| **Backend** | Node.js, Express, CORS |
| **Styling** | CSS3 (Flexbox), Highlight.js (GitHub Dark theme) |
| **AI Integration** | Google Gemini / OpenAI (Backend Integration) |

---

## 🚀 Getting Started

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm or yarn

### 2. Installation

**Backend Setup:**
```bash
cd BackEnd
npm install
npm run dev
```
**Frontend Setup:**
```bash
cd Frontend
npm install
npm run server
```

## 💡 How It Works

### 1️⃣ Input  
The user writes code in the left-hand editor panel using the syntax-highlighted **Editor** component.

### 2️⃣ Request  
Clicking the **"Review"** button triggers an asynchronous `POST` request via **Axios**, sending the code string to the **Node.js backend**.

### 3️⃣ Processing  
The backend:
- Receives the code  
- Communicates with an AI model (e.g., **Gemini** or **GPT**)  
- Uses a specialized prompt designed for **code auditing and refactoring**

### 4️⃣ Response  
The AI generates a review in **Markdown format**, which the backend sends back to the frontend as a **JSON response**.

### 5️⃣ Render  
The frontend:
- Updates its internal state  
- Uses the `react-markdown` component to parse the Markdown  
- Displays a clean, human-readable UI with syntax highlighting  

---

## 🔄 Data Flow Diagram

```text
User (Code Input)
        │
        ▼
Frontend (React Editor)
        │
        ▼
Axios POST Request
        │
        ▼
Node.js Backend
        │
        ▼
AI Model (Gemini / GPT)
        │
        ▼
Markdown Review (JSON Response)
        │
        ▼
React State Update
        │
        ▼
react-markdown Renderer
        │
        ▼
Formatted Code Review UI
```




