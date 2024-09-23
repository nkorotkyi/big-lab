import React from "react"

import "../styles/Modal.css"
import { MyButton } from "./UI/MyButton"
const Modal = ({ data, onClose }) => {
  return (
    <div className="modal">
      <h2>Дані з форми</h2>
      <p>Прізвище: {data.lastName}</p>
      <p>Ім'я: {data.firstName}</p>
      <p>Телефон: {data.phone}</p>
      <p>Email: {data.email}</p>
      <br />
      <div>
        <p>Студент ДУ "Житомирська політехніка"</p>
        <p>Група ЗІПЗ-21-1</p>
        <p>Дата виконання: 15.09.2024</p>
      </div>

      <MyButton className="button" onClick={onClose}>
        Закрити
      </MyButton>
    </div>
  )
}

export default Modal
