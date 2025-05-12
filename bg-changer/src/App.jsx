import { useState } from "react"

function App() {

  const[color,setColor]= useState("black")

  return (
    <>
    <div className="w-screen h-screen flex gap-5 justify-center" style={{backgroundColor:color}}>
      <div className="fixed bg-white bottom-12 px-5 flex flex-wrap rounded-xl gap-2">
        <button onClick={()=>setColor('red')} className="px-3  m-2 rounded-xl cursor-pointer text-white" style={{backgroundColor:"red"}} >Red</button>
        <button onClick={()=>setColor('orange')} className="px-3  m-2 rounded-xl cursor-pointer text-white" style={{backgroundColor:"orange"}} >Orange</button>
        <button onClick={()=>setColor('violet')} className="px-3  m-2 rounded-xl cursor-pointer text-white" style={{backgroundColor:"violet"}} >Violet</button>
        <button onClick={()=>setColor('blue')} className="px-3  m-2 rounded-xl cursor-pointer text-white" style={{backgroundColor:"blue"}} >Blue</button>
        <button onClick={()=>setColor('olive')} className="px-3  m-2 rounded-xl cursor-pointer text-white" style={{backgroundColor:"olive"}} >Olive</button>
        <button onClick={()=>setColor('black')} className="px-3  m-2 rounded-xl cursor-pointer text-white" style={{backgroundColor:"black"}} >Black</button>
        <button onClick={()=>setColor('green')} className="px-3  m-2 rounded-xl cursor-pointer text-white" style={{backgroundColor:"green"}} >green</button>


      </div>
    </div>
    </>
  )
}

export default App
