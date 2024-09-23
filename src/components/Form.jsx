import React, { useRef, useState } from "react"
import ReactDOM from "react-dom"
import Modal from "./Modal.jsx"
import styles from "../styles/Form.css"
import { MyButton } from "./UI/MyButton.jsx"
import { MyInput } from "./UI/MyInput.jsx"

const Form = () => {
  const [formData, setFormData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})

  const lastNameRef = useRef(null)
  const firstNameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)

  const validateForm = () => {
    const errors = {}

    if (!lastNameRef.current.value.match(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i)) {
      errors.lastName = "Не коректний запис"
    }

    if (!firstNameRef.current.value.match(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i)) {
      errors.firstName = "Не коректний запис"
    }

    const phoneRegex = /\+|380([5|6|7|9][0|1|3|5|6|7|9])\d{7}/i
    if (!phoneRegex.test(phoneRef.current.value.trim())) {
      errors.phone = "Будь ласка, введіть коректний номер телефону (+380xxxxxxxxx)"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailRef.current.value.trim())) {
      errors.email = "Будь ласка, введіть коректний email"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const data = {
        lastName: lastNameRef.current.value,
        firstName: firstNameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
      }
      e.target.reset()
      setFormData(data)
      setShowModal(true)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Прізвище:
          <input type="text" ref={lastNameRef} className="input" name="surname" data-testid="surname" />
          {validationErrors.lastName && <div className="error">{validationErrors.lastName}</div>}
        </label>

        <label className="label">
          Ім'я:
          <input type="text" ref={firstNameRef} className="input" name="name" data-testid="name" />
          {validationErrors.firstName && <div className="error">{validationErrors.firstName}</div>}
        </label>

        <label className="label">
          Телефон:
          <input type="tel" ref={phoneRef} className="input" name="phone" data-testid="phone" />
          {validationErrors.phone && <div className="error">{validationErrors.phone}</div>}
        </label>

        <label className={styles.label}>
          Email:
          <input type="email" ref={emailRef} className="input" name="email" data-testid="email" />
          {validationErrors.email && <div className="error">{validationErrors.email}</div>}
        </label>

        <MyButton className="button" type="submit">
          Відправити
        </MyButton>
      </form>

      {showModal &&
        ReactDOM.createPortal(
          <Modal
            data={formData}
            onClose={() => {
              setShowModal(false)
            }}
          />,
          document.getElementById("portal-root")
        )}
    </div>
  )
}

export default Form
