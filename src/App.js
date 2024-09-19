import React, { useState } from "react"
import SurveyForm from "./components/SurveyForm"
import SurveyList from "./components/SurveyList"
import SurveyStatistics from "./components/SurveyStatistics"
import { v4 as uuidv4 } from "uuid"
import "./App.css"

const App = () => {
  const [surveys, setSurveys] = useState([])
  const [selectedSurvey, setSelectedSurvey] = useState(null)
  const [creatingNewSurvey, setCreatingNewSurvey] = useState(false)
  const [answers, setAnswers] = useState([])
  const [surveyResults, setSurveyResults] = useState([])

  const handleCreateSurvey = (newSurvey) => {
    setSurveys([...surveys, { ...newSurvey, id: uuidv4() }])
    setCreatingNewSurvey(false)
  }

  const handleSelectSurvey = (survey) => {
    if (selectedSurvey && selectedSurvey.id === survey.id) {
      setSelectedSurvey(null)
    } else {
      setSelectedSurvey(survey)
      setAnswers(new Array(survey.questions.length).fill(""))
    }
  }

  const handleSubmitSurvey = (submittedAnswers) => {
    setSurveyResults([...surveyResults, { surveyId: selectedSurvey.id, answers: submittedAnswers }])
    // setSelectedSurvey(null)
  }

  return (
    <div className="wrapper">
      <div className="content">
        <h1>Додаток-опитувальник</h1>

        <button onClick={() => setCreatingNewSurvey(true)}>Створити нове опитування</button>

        {creatingNewSurvey && (
          <SurveyForm
            isOpen={creatingNewSurvey}
            onClose={() => setCreatingNewSurvey(false)}
            onCreateSurvey={handleCreateSurvey}
          />
        )}
        <div className="surveys">
          <div>
            <SurveyList surveys={surveys} onSelectSurvey={handleSelectSurvey} />
            {selectedSurvey && (
              <div>
                <h2>{selectedSurvey.title}</h2>
                {selectedSurvey.questions.map((question, index) => (
                  <div key={index}>
                    <p>{question}</p>
                    <input
                      type="text"
                      value={answers[index]}
                      onChange={(e) => {
                        const updatedAnswers = [...answers]
                        updatedAnswers[index] = e.target.value
                        setAnswers(updatedAnswers)
                      }}
                    />
                  </div>
                ))}
                <button onClick={() => handleSubmitSurvey(answers)}>Надіслати відповіді</button>
              </div>
            )}
          </div>
          {surveyResults.length > 0 && selectedSurvey && (
            <SurveyStatistics results={surveyResults} surveyId={selectedSurvey.id} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
