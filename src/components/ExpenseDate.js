function ExpenseDate(props){
const day=props.date.toLocaleString('ar',{month:'long'})
const month=props.date.toLocaleString('en-US',{day:'2-digit'})
    return(
        <div>
            <p>{day}</p>
            <p>{month}</p>
        </div>
    );
}

export default ExpenseDate