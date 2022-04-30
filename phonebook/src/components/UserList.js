const UserList = ({filtered, persons}) => {
    return ( 
        <div className="numberList">
            <h2>Numbers</h2>
                {filtered.length > 0 ? filtered.map((person) => <p key={person.name}>{person.name} ---- {person.number}</p>) : persons.map((person) => <p key={person.name}>{person.name} ---- {person.phoneNum}</p>)}
        </div>
     );
}
 
export default UserList;