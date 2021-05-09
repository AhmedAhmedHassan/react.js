import './App.css';
import Table from './components/table/Table';
import Form from './components/form/Form';

function App() {
 
  const outputDataHandler=(output)=>{
    console.log(output)
  }

  

  return (
   <div>
    <Form onAddData={outputDataHandler} />
    <Table />
   </div>
  );
}



export default App;
