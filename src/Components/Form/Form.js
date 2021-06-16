import React,{useState,useRef} from 'react';
import Button from '../Ui/Button'
import Modal from '../Ui/Modal'
import Wrapper from '../Helpers/Wrapper';
import './Form.css'
const AddUser = props =>{

    // States

    const nameInputRef=useRef()
    const ageInputRef=useRef()
   
    const [error,setError]=useState()

    const AddUserHandler=event=>{
        event.preventDefault()
           const enterUser=nameInputRef.current.value
           const enterAge=ageInputRef.current.value
        if(enterUser.trim().length === 0 || enterAge.trim().length === 0){
          setError({
            title:'invalid input',
            message:"the name and age can't be empty"
          })
          return
        }if(+enterAge < 1){
          setError({
            title:'invalid age input',
            message:"the  age can't be (< 1)"
          })
          return
        }
       
        props.onAddUser(enterUser,enterAge)
        
         
    }

   

  const handleCloseModal = () =>{
    setError(null)
  }

    return(
     <Wrapper>
        {error && <Modal title={error.title} message={error.message} onConfirm={handleCloseModal} />} 
        <form onSubmit={AddUserHandler}>
        <div class="group">
          <input type="text" ref={nameInputRef}/>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
        <div class="group">
          <input type="number" ref={ageInputRef}/>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Age</label>
        </div>
        <Button />
      </form>
      </Wrapper>
     
    )
}

export default AddUser