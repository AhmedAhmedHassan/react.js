import {useState} from 'react';


const Title = (props) =>{
    const [title, setTitle] = useState(props.title);

    const clickHandler=()=>{
      setTitle('Updated')
      console.log(title)
    }
    return(
        <div>
            <p>{title}</p>
        
        <button onClick={clickHandler}>Click</button>
        </div>
        
    );
}

export default Title