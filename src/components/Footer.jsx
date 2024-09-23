import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">Main Page</Link>
      <Link to="/form">Form</Link>
      <Link to="/privacyPolicy">Privacy & Policy</Link>
    </footer>
  )
}

export default Footer
