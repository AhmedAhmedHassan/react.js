import './App.css';
import React, {useState, Fragment} from 'react';
import AddUser from './Components/Form/Form'
import Data from './Components/Data/Data'
import Wrapper from './Components/Helpers/Wrapper';
function App() {
  const [userList, setUserList]=useState([]);

  const addUserHandler=(uName, uAge)=>{
    setUserList((prev)=>{
      return [...prev, {name:uName, age:uAge, id:Math.random().toString()}]
    })
  }

  return (
    <Fragment>
     <AddUser onAddUser={addUserHandler}/>
     <Data users={userList}/>
    </Fragment> 
  );
}

export default App;
