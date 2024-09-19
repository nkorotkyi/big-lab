import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { SurveyProvider } from "./hooks/useSurveyContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <SurveyProvider>
    <App />
  </SurveyProvider>
)
