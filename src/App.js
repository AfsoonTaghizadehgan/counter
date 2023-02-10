import './App.css';
import Count from './Components/Count.js'
import React from 'react';

//simple counter application with useState as the Hook
function App() {

  const [counter, setCounter]= React.useState(0)

  //Decrease function
  function Subtract(){
    setCounter(prevCounter => prevCounter - 1)
  }

  //Increase Function
  function Add(){
    setCounter(prevCounter => prevCounter + 1)
  } 
  return (
    <div className="App">
      <button className="button subtract" onClick={Subtract}>-</button>
      <Count 
      count={counter}/>
      <button className="button add" onClick={Add}>+</button>
    </div>
  );
}

export default App;
