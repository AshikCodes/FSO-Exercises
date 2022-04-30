import { useState, useEffect } from "react";

const SearchField = ({persons, setFiltered}) => {
    const [searchVal, setSearchVal] = useState('');     //Search Value
      

    //Search functionality logic
    const searchLogic = (e) => {
        console.log("searchVal is",e.target.value);
        setSearchVal(e.target.value);
    
      }

    //Rerenders everytime the search value is changed
    useEffect(() => {
    const newFiltered = persons.filter((person) => {
        return person.name.startsWith(searchVal);
    })
        if(newFiltered.length > 0){
            setFiltered(newFiltered);
        }
        else {
            setFiltered([]);
            console.log(`We could not find a user by the name of ${searchVal}`)
        }

    },[searchVal,persons])


    return ( 
        <div className="searchfield-container">
            filter shown with a <input type="text" value={searchVal} onChange={searchLogic}/>
        </div>
     );
}
 
export default SearchField;