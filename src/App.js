import './App.css';
import React, {useState} from 'react';
import AddUser from './Components/Form/Form'
import Data from './Components/Data/Data'
function App() {
  const [userList, setUserList]=useState([]);

  const addUserHandler=(uName, uAge)=>{
    setUserList((prev)=>{
      return [...prev, {name:uName, age:uAge, id:Math.random().toString()}]
    })
  }

  return (
    <div>
     <AddUser onAddUser={addUserHandler}/>
     <Data users={userList}/>
    </div> 
  );
}

export default App;
