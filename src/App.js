import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salam']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name="BappaRaz" nayika="Chaka"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle ={
    border:'2px solid gold',
    width:'400px',
    margin:'10px'
  }
  return (
  <div style={personStyle}>
    <h1>Nayok: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>
  );
}

export default App;
