import React from "react"
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const SurveyStatistics = ({ results, surveyId }) => {
  const surveyResults = results.filter((result) => result.surveyId === surveyId)

  if (surveyResults.length === 0) {
    return <p>No results for this survey yet.</p>
  }

  const data = surveyResults.reduce((acc, result) => {
    result.answers.forEach((answer, index) => {
      if (!acc[index]) acc[index] = {}
      acc[index][answer] = (acc[index][answer] || 0) + 1
    })
    return acc
  }, [])

  return (
    <div>
      <h2>Статистика по обраному опитуванню</h2>
      <div className="diagrams">
        {data.map((questionStats, questionIndex) => {
          const chartData = Object.keys(questionStats).map((answer) => ({
            name: answer,
            value: questionStats[answer],
          }))

          return (
            <div key={questionIndex} className="diagram">
              <h3>Питання {questionIndex + 1}</h3>
              <PieChart width={250} height={250}>
                <Pie
                  data={chartData}
                  cx={125}
                  cy={125}
                  labelLine={false}
                  outerRadius={75}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SurveyStatistics
