import { useState, useContext, createContext } from "react"

const SurveyContext = createContext()

export const useSurveyContext = () => {
  return useContext(SurveyContext)
}

export const SurveyProvider = ({ children }) => {
  const [surveys, setSurveys] = useState([])
  const [selectedSurvey, setSelectedSurvey] = useState(null)
  const [results, setResults] = useState([])

  const addSurvey = (newSurvey) => {
    setSurveys((prevSurveys) => [...prevSurveys, newSurvey])
  }

  const selectSurvey = (survey) => {
    setSelectedSurvey(survey)
  }

  const submitSurvey = (surveyId, answers) => {
    const newResult = { surveyId, answers }
    setResults((prevResults) => [...prevResults, newResult])
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
