import React, { useState } from "react"
import { createPortal } from "react-dom"
import styles from "../styles/SurveyForm.module.css"

const SurveyForm = ({ isOpen, onClose, onCreateSurvey }) => {
  const [title, setTitle] = useState("")
  const [questions, setQuestions] = useState([""])

  const addQuestion = () => {
    setQuestions([...questions, ""])
  }

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions]
    newQuestions[index] = value
    setQuestions(newQuestions)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && questions.length > 0) {
      onCreateSurvey({ title, questions })
      setTitle("")
      setQuestions([""])
      onClose()
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div className={styles.modal}>
      <form onSubmit={handleSubmit}>
        <h2>Нове опитування</h2>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {questions.map((question, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Питання ${index + 1}`}
            value={question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
            required
          />
        ))}
        <button type="button" onClick={addQuestion}>
          Додати питання
        </button>
        <button type="submit">Створити опитування</button>
        <button type="button" onClick={onClose}>
          Відміна
        </button>
      </form>
    </div>,
    document.getElementById("portal-root")
  )
}

export default SurveyForm
