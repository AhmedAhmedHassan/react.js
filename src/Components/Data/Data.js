import react from 'react';
import  './Data.css';

const Data = (props) =>{
    return (
            <div class="multi-button">
             {props.users.map(user=>
                
                <p key={user.id}><button className="data">{user.name} ({user.age} years old)</button></p>
             )}   
            
            </div>
    );
}
export default Data