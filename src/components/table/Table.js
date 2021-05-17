import './table.css';
import TableRow from './TableRow';
import Filter from '../filter/Filter';

const Table=(props)=>{
   
 let empty= <p>No Data Found</p>

 if(props.data.length > 0){
   empty =props.data.map(item => (
    <TableRow
    key={item.id}
     name={item.name}
     date={item.date}
     age={item.age}
    /> 
   ))
   }

    return(
      <div>
          <section className="container">

          
            <Filter/>
         

            <table id="customers">
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Age</th>
            </tr>   
                   {/* Adding the data dynamically */}
            
            {empty}
            
                  
            </table>
           </section>
      </div>
        
    );
};

export default Table;