import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Most = (props) => {
  if (props.votes == 0) {
    return (
      <p>No votes have been submitted</p>
    )
  }
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdote}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [most, setMost] = useState(0)

  const selectNext = () => {
    const next = Math.floor(Math.random() * anecdotes.length)
    setSelected(next)
  }

  const vote = () => {
    ++votes[selected]
    if (votes[selected] > votes[most]) {
      setMost(selected)
    }
    setVotes(votes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={vote} text="Vote"/>
      <Button handleClick={selectNext} text="next anecdote"/>
      <Most anecdote={anecdotes[most]} votes={votes[most]}/>
    </div>
  )
}

export default App