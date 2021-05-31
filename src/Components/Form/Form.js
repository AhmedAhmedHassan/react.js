import React from 'react';
import Button from '../Ui/Button'
import './Form.css'
const AddUser = props =>{


    const AddUserHandler=event=>{
        event.preventDefault()
    }


    return(
       
        <form onSubmit={AddUserHandler}>
        <div class="group">
          <input type="text"/>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
        <div class="group">
          <input type="number"/>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Age</label>
        </div>
        <Button />
      </form>
     
    )
}

export default AddUser