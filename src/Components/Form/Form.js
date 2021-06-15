import React,{useState} from 'react';
import Button from '../Ui/Button'
import Modal from '../Ui/Modal'
import './Form.css'
const AddUser = props =>{

    // States

    const [enterUser, setEnterUser]=useState('');
    const [enterAge, setEnterAge]=useState('');
    const [error,setError]=useState()

    const AddUserHandler=event=>{
        event.preventDefault()
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
        console.log(enterUser.trim())
        console.log(enterAge.trim())
        props.onAddUser(enterUser,enterAge)
        setEnterUser('')
        setEnterAge('')
         
    }

   const userChangeHandler =(event)=>{
        setEnterUser(event.target.value)
   }

   const ageChangeHandler =(event)=>{
    setEnterAge(event.target.value)
}

  const handleCloseModal = () =>{
    setError(null)
  }

    return(
       <div>
        {error && <Modal title={error.title} message={error.message} onConfirm={handleCloseModal} />} 
        <form onSubmit={AddUserHandler}>
        <div class="group">
          <input type="text" value={enterUser} onChange={userChangeHandler}/>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
        <div class="group">
          <input type="number" value={enterAge} onChange={ageChangeHandler}/>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Age</label>
        </div>
        <Button />
      </form>
      </div>
     
    )
}

export default AddUser