import './table.css';
const TableRow=(props)=>{
    return(
        
            <tr>
                <td>{props.name}</td>
                <td>{props.date.getFullYear()}</td>
                <td>{props.age}</td>
            </tr>
        
    );
}
export default TableRow;