import React from "react"
import styles from "../styles/SurveyList.module.css"

const SurveyList = ({ surveys, onSelectSurvey }) => {
  return (
    <div className={styles.surveyList}>
      <h3>Доступні опитування</h3>
      <ul>
        {surveys.map((survey, index) => (
          <li key={index} onClick={() => onSelectSurvey(survey)}>
            {survey.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SurveyList
