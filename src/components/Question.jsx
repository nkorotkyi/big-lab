import React from "react"

const Question = ({ question, onAnswer }) => {
  return (
    <div>
      <p>{question.text}</p>
      <input type="text" onChange={(e) => onAnswer(e.target.value)} />
    </div>
  )
}

export default Question
