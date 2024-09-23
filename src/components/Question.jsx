import React from "react"
import { MyInput } from "./UI/MyInput"

const Question = ({ question, onAnswer }) => {
  return (
    <div>
      <p>{question.text}</p>
      <MyInput type="text" onChange={(e) => onAnswer(e.target.value)} />
    </div>
  )
}

export default Question
