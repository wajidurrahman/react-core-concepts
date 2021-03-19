import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salam']
 const products =[
   {name:'Photoshop', price:'$90.99'},
   {name:'illustrator', price:'$60.99'},
   {name:'PDF Reader', price: '$6.99'},
   {name:'Premiere El', price: '$249.99'}
  ]
  const friends =[
   {name:'Saifull', age:'27'},
   {name:'Azizul', age:'30'},
   {name:'Asrafull', age:'27'},
   {name:'Mahmud', age:'30'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <ul>
         {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            friends.map(fd => <List friend={fd}></List>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>
        <Person></Person>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

function Users(){
const [users, setUsers] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
}, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1> Count: {count}</h1>
      <button onClick={ () =>setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1) }>Decrease</button>
    </div>
  )
}

function List (props){
  const friendStyle ={
    border:'2px solid gold',
    borderRadius:'10px',
    backgroundColor:'green',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'
  }
  return(
   <div style={friendStyle}>
     <h4>{props.friend.name}</h4>
     <h6>Age:{props.friend.age}</h6>
     <button>Job Details</button>
   </div>
  )
}

function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'
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
