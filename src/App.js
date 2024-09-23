import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivacyPolicy from "./components/Privacy & Policy"
import Footer from "./components/Footer"
import Home from "./components/Home"
import "./App.css"
import Form from "./components/Form"

const App = () => {
  return (
    <Router>
      <div className="allContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
