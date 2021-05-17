import React , {useState} from 'react';
import './App.css';
import Table from './components/table/Table';
import Form from './components/form/Form';

const items=[
  {id:1,name:'Ahmed', date:new Date(), age:'26'},
  {id:2,name:'Ali', date:new Date('11-4-2002'), age:'2'},
  {id:3,name:'Hany', date:new Date('11-4-2006'), age:'30'},
  
];




function App() {
 
 const [expenses, setExpenses]=useState(items)

  const outputDataHandler=(output)=>{
    setExpenses(prevExpenses => {
      return [output, ...prevExpenses]
    })
    console.log(output)
  }

  
  const [isEditing, setIsEditing]=useState(false);

  const clickHandler=()=>{
    setIsEditing(true)
  }

  const cancelEditing = () =>{
    setIsEditing(false)
  }

  return (
   <div>
    {!isEditing && <button onClick={clickHandler}> Add New Item </button>} 
    {isEditing && <Form onAddData={outputDataHandler} onCancel={cancelEditing}/>}
    
    
    <Table data={expenses}/>
   </div>
  );
}



export default App;
