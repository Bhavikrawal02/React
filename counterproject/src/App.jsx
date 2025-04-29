import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter=15
  const [counter,setCounter]= useState(15)

  const Increment=()=>{
    setCounter(counter+1)
    
  }
  const Decrement=()=>{
    if(counter>0)
    setCounter(counter-1)
  else {
    console.log("value cannot be negative");
    
  }
  }

  return (
    <>
    <h1>Hello world !</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={Increment}>Increment</button>
    <br />
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
