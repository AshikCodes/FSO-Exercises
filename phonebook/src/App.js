import './App.css';
import { useState } from 'react';

function App() {
  var id = 0
  // const [id, setId] = useState(0);
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'
    }
  ]) 
  const [newName, setNewName] = useState('')
   
  const handleChange = (e) => {
      console.log(e.target.value);
      setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log("Clicked submit btn")
    e.preventDefault();


    const newPerson = {
      name: newName
    };

    setPersons(persons.concat(newPerson));
    console.log("persons array is now",persons)
    setNewName("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName}  onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* persons.length > 1 && */}
      {persons.map((person) => <p key={id++}>{person.name}</p>)}
    </div>
  );
}

export default App;
