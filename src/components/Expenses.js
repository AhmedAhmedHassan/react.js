import ExpenseItems from './ExpenseItems';

function Expenses(){
    const items = [
        {name:'Ahmed',date:new Date()},
        {name:'mohammed',date:'2021/5/4'}
      ];

      return(
        <div>  
        <ExpenseItems name={items[0].name} date={items[0].date} />
        <ExpenseItems name={items[1].name} date={items[1].date} />
        </div>
      );
}

export default Expenses;