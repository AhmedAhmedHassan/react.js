import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItems (props){
    
   return(
       <div>
           <ExpenseDate date={props.date} />
           <p>{props.name}</p>
           <p className="item">This is Espense item</p>
       </div>
   );
}

export default ExpenseItems;