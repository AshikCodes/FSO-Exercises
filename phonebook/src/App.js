import './App.css';
import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import SearchField from './components/SearchField';
import UserList from './components/UserList';
import axios from 'axios';

function App() {

  const [filtered, setFiltered] = useState([]);
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', phoneNum: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', phoneNum: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', phoneNum: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', phoneNum: '39-23-6423122', id: 4 }
  // ]);
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios 
      .get('http://localhost:3001/persons')
        .then((response) => {
          const personsData = response.data;
          setPersons(personsData);
        })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField persons={persons} setFiltered={setFiltered}/>
      <UserForm persons={persons} setPersons={setPersons}/>
      <UserList filtered={filtered} persons={persons}/>
    </div>
  );
}

export default App;
