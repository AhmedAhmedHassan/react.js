import React , {useState} from 'react';
import './form.css';

const Form=(props)=>{

  // another way of state 
// const [enteredInputs, setEnteredInputs] = useState({
//   enteredname : '',
//   enteredAge : '',
//   enteredDate : ''
// })

const [enteredname, setEnteredname] = useState('');
const [enteredAge, setEnteredAge] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const nameHandler = event =>{
  setEnteredname(event.target.value);
//    setEnteredInputs((previousState)=>{
//      return{
//       ...previousState,
//       enteredname : event.target.value
//      }
      
//   })
 }

const ageHandler = event =>{
  setEnteredAge(event.target.value);
  
}

const dateHandler = event =>{
  setEnteredDate(event.target.value);
  
}

const submitHandler = event =>{
  event.preventDefault();

  const output = {
    name : enteredname,
    age : enteredAge,
    date : new Date(enteredDate)
  }

props.onAddData(output);
setEnteredname('')
setEnteredAge('')
setEnteredDate('')

}

    return(

<div>
<div class="container">
  <form onSubmit={submitHandler}>
  <div class="row">
    <div class="col-25">
      <label for="fname"> Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.." value={enteredname}  onChange={nameHandler} />
    </div>
  </div>
  
  <div class="row">
    <div class="col-25">
      <label for="country">Age</label>
    </div>
    <div class="col-75">
      <input type="number"  name="age" onChange={ageHandler} value={enteredAge} />
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Date</label>
    </div>
    <div class="col-75">
    <input type="date"  name="date" value={enteredDate} onChange={dateHandler} />
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Submit" />
    <input type="button" value="Cancel" onClick={props.onCancel}/>
  </div >
  </form >
</div>
 </div>
    );
}
export default Form