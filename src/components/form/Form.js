import React , {useState} from 'react';
import './form.css';

const Form=(props)=>{

  // another way of state 
// const [enteredInputs, setEnteredInputs] = useState({
//   enteredTitle : '',
//   enteredAge : '',
//   enteredDate : ''
// })

const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAge, setEnteredAge] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const titleHandler = event =>{
  setEnteredTitle(event.target.value);
//    setEnteredInputs((previousState)=>{
//      return{
//       ...previousState,
//       enteredTitle : event.target.value
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
    title : enteredTitle,
    age : enteredAge,
    date : new Date(enteredDate)
  }

props.onAddData(output);
setEnteredTitle('')
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
      <input type="text" id="fname" name="firstname" placeholder="Your name.." value={enteredTitle}  onChange={titleHandler} />
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
  </div >
  </form >
</div>
 </div>
    );
}
export default Form