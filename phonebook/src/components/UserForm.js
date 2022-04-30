import { useState } from "react";

const UserForm = ({persons,setPersons}) => {
    //Adding new name and phone state variabes
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('');


    //When user clicks add button
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

      //Whenever name changes
      const handleChange = (e) => {
        console.log(e.target.value);
        setNewName(e.target.value);
    }

    return ( 
        <div className="userForm">
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
        </div>
     );
}
 
export default UserForm;