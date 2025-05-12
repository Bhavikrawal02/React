import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increase(){
    // setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);

    // what happen?
    // counter will increase by one only  because this all happens in batch like system.. if we want to do this we can use callback 
    

    // both below are same 
    // setCount((prevCounter)=>prevCounter+1);
    // setCount((Counter)=> Counter+1)


    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
  

  }
  function decrease(){
    setCount(count-1);
  }

  return (
   <>
 <div style={{backgroundColor:'cyan', margin:100}}  className="counter">Counter :{count}</div>   
 <button onClick={increase}>Increment</button>
 <button onClick={decrease}>Decrement</button>
   </>
  )
}

export default App
