import './table.css';
import TableRow from './TableRow';

const Table=(props)=>{
    const items=[
        {name:'Ahmed', date:new Date(), age:'26'},
        {name:'Ali', date:new Date('11-4-2002'), age:'2'},
        {name:'Hany', date:new Date('11-4-2006'), age:'30'},
        
      ];
    return(
      <div>
          <section className="container">
            <table id="customers">
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Age</th>
            </tr>          
                <TableRow name={items[0].name} date={items[0].date} age={items[0].age} />
                <TableRow name={items[1].name} date={items[1].date} age={items[1].age} />
                <TableRow name={items[2].name} date={items[2].date} age={items[2].age} />           
            </table>
           </section>
      </div>
        
    );
};

export default Table;