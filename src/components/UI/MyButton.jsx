import React from "react"

import "./MyButton.css"

export const MyButton = ({ ...props }) => {
  return <button type="button" {...props}></button>
}
