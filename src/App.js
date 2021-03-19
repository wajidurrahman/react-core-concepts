import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salam']
 const products =[
   {name:'Photoshop', price:'$90.99'},
   {name:'illustrator', price:'$60.99'},
   {name:'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name="BappaRaz" nayika="Chaka"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
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
