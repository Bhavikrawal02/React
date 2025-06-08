// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   function increase(){
//     // setCount(count+1);
//     setCount(count+1);
//     setCount(count+1);
//     setCount(count+1);

//     // what happen?
//     // counter will increase by one only  because this all happens in batch like system.. if we want to do this we can use callback 
    

//     // both below are same 
//     // setCount((prevCounter)=>prevCounter+1);
//     // setCount((Counter)=> Counter+1)


//     //  setCount((prevCounter)=>prevCounter+1);
//     //  setCount((prevCounter)=>prevCounter+1);
//     //  setCount((prevCounter)=>prevCounter+1);
//     //  setCount((prevCounter)=>prevCounter+1);
//     //  setCount((prevCounter)=>prevCounter+1);
//     //  setCount((prevCounter)=>prevCounter+1);
  

//   }
//   function decrease(){
//     setCount(count-1);
//   }

//   return (
//    <>
//  <div style={{backgroundColor:'cyan', margin:100}}  className="counter">Counter :{count}</div>   
//  <button onClick={increase}>Increment</button>
//  <button onClick={decrease}>Decrement</button>
//    </>
//   )
// }

// export default App

// useref -> hookm

// import React, { useRef, useState } from 'react';

// function TimerCounter() {
//   const count = useRef(0);
//   const [render, setRender] = useState(0);

//   const handleClick = () => {
//     count.current += 1;
//     console.log("Count (won't trigger re-render):", count.current);
//   };

//   return (
//     <>
//       <p>Click count (from console only): {count.current}</p>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={() => setRender(render + 1)}>Force Re-render</button>
//     </>
//   );
// }

// export default TimerCounter


import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();  // Directly accesses the DOM node
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}

export default InputFocus

