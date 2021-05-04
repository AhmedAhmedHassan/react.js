import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function App() {
  
const items =[
  {title:'Ahmed',age:'25'},
  {title:'Mohammed',age:'24'}
]

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p  >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Learn React
        </a>
        <Title title={items[0].title} />
        <Title title={items[1].title} />
       
      </header>
    </div>
  );
}

export default App;
