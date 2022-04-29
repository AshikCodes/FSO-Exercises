import './App.css';
import { useState } from 'react';

function App() {
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

    if(persons.filter((person) => { return person.name === newPerson.name}).length > 0){
      alert(`${newName} already exists. Try another name.`);
    }
    else {
      setPersons(persons.concat(newPerson));
      console.log("persons array is now",persons)
    }
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
      {persons.map((person) => <p key={person.name}>{person.name}</p>)}
    </div>
  );
}

export default App;
