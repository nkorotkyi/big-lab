import { useState, useContext, createContext } from "react"

const SurveyContext = createContext()

export const useSurveyContext = () => {
  return useContext(SurveyContext)
}

export const SurveyProvider = ({ children }) => {
  const [surveys, setSurveys] = useState([])
  const [selectedSurvey, setSelectedSurvey] = useState(null)
  const [results, setResults] = useState([])

  // Додавання нового опитування
  const addSurvey = (newSurvey) => {
    setSurveys((prevSurveys) => [...prevSurveys, newSurvey])
  }

  // Вибір опитування
  const selectSurvey = (survey) => {
    setSelectedSurvey(survey)
  }

  // Надсилання форми
  const submitSurvey = (answers) => {
    setResults(answers)
  }

  return (
    <SurveyContext.Provider
      value={{
        surveys,
        selectedSurvey,
        results,
        addSurvey,
        selectSurvey,
        submitSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  )
}
