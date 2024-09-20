import React, { useState } from "react"
import { useSurveyContext } from "../hooks/useSurveyContext"
import SurveyStatistics from "./SurveyStatistics"
import SurveyForm from "./SurveyForm"
import SurveyList from "./SurveyList"
import { v4 as uuidv4 } from "uuid"
import "../App.css"

const Home = () => {
  const { surveys, addSurvey, selectSurvey, selectedSurvey, submitSurvey, results } = useSurveyContext()
  const [creatingNewSurvey, setCreatingNewSurvey] = useState(false)
  const [answers, setAnswers] = useState([])

  const handleCreateSurvey = (newSurvey) => {
    addSurvey({ ...newSurvey, id: uuidv4() })
    setCreatingNewSurvey(false)
  }

  const handleSelectSurvey = (survey) => {
    if (selectedSurvey && selectedSurvey.id === survey.id) {
      selectSurvey(null)
    } else {
      selectSurvey(survey)
      setAnswers(new Array(survey.questions.length).fill(""))
    }
  }

  const handleSubmitSurvey = () => {
    submitSurvey(selectedSurvey.id, answers)
  }

  return (
    <div className="wrapper">
      <main>
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
                  <button onClick={handleSubmitSurvey}>Надіслати відповіді</button>
                </div>
              )}
            </div>

            {results.length > 0 && selectedSurvey && (
              <SurveyStatistics results={results} surveyId={selectedSurvey.id} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
