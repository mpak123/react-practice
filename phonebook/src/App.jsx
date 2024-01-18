import { useState } from 'react'

const People = (props) => {
  if (props.filter.length > 0) {
    return (
      props.people
        .filter((person) => person.name.toLowerCase().includes(props.filter))
        .map(person => <p key={person.id}>{person.name} {person.number}</p>)
    );
  }

  return (
    props.people.map(person => <p key={person.id}>{person.name} {person.number}</p>)
  );
}


//functional but not good style. refactor to use external components. just didn't do that bc no time and too lazy
const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      id: 0,
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [tracker, setTracker] = useState(new Set(['Arto Hellas']))
  const [filter, setFilter] = useState('')

  const addInfo = (event) => {
    event.preventDefault()
    if (tracker.has(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = { 
        name: newName, 
        id: persons[persons.length - 1].id + 1, 
        number: newNumber
      }
      tracker.add(nameObject.name)
      setTracker(new Set(tracker))
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Filter: <input onChange={handleFilterChange}/>
      </form>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <People people={persons} filter={filter}/>
    </div>
  )
}

export default App