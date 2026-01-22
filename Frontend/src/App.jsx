import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`)
  const [review, setReview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setIsLoading(true);
    setReview("Analyzing your code..."); // Visual feedback

    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });

      setReview(response.data); 
      
    } catch (error) {
      console.error("API Error:", error);
      setReview("## Error\nCould not connect to the AI server. Is the backend running?");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <button 
          disabled={isLoading}
          onClick={reviewCode} 
          className="review-btn"
        >
          {isLoading ? "Reviewing..." : "Review"}
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  )
}

export default App