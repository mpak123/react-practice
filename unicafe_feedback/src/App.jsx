import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  const avg = (props.good - props.bad) / total
  const positive = props.good / total
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={props.good}/>
        </tbody>
        <tbody>
          <StatisticsLine text="Neutral" value={props.neutral}/>
        </tbody>
        <tbody>
          <StatisticsLine text="Bad" value={props.bad}/>
        </tbody>
        <tbody>
          <StatisticsLine text="Average" value={avg}/>
        </tbody>
        <tbody>
          <StatisticsLine text="Positive" value={(positive * 100) + "%"}/>
        </tbody>
      </table> 
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1> 
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App