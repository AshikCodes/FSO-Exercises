import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNum: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNum: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNum: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNum: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('');
  const [searchVal, setSearchVal] = useState('');
   
  const handleChange = (e) => {
      console.log(e.target.value);
      setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log("Clicked submit btn")
    e.preventDefault();


    const newPerson = {
      name: newName,
      phoneNum: newPhone
    };

    if(persons.filter((person) => { return person.name === newPerson.name}).length > 0){
      alert(`${newName} already exists. Try another name.`);
    }
    else {
      setPersons(persons.concat(newPerson));
      console.log("persons array is now",persons)
    }
    setNewName("");
    setNewPhone("");
  }


  const searchLogic = (e) => {
    console.log("searchVal is",e.target.value);
    setSearchVal(e.target.value);
  }

  useEffect(() => {
    const filtered = persons.filter((person) => {
      return person.name.startsWith(searchVal);
    })

    if(filtered.length > 0){
      setPersons(filtered);
    }
    else {
      console.log(`We could not find a user by the name of ${searchVal}`)
    }
  },[searchVal])

  return (
    <div>
      <h2>Phonebook</h2>
      <div className="searchfield">
        filter shown with a <input type="text" value={searchVal} onChange={searchLogic}/>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName}  onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newPhone}  onChange={(e) => setNewPhone(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <p key={person.name}>{person.name} ---- {person.phoneNum}</p>)}
    </div>
  );
}

export default App;
