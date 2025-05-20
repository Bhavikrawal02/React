
import './App.css'
import { useCallback, useEffect, useState,useRef } from 'react'

function App() {
  const[length,setLength]=useState(8)
  const[numberallowed,setNumberallowed]=useState(false)
  const[charallowed,setCharallowed]=useState(false)
  const[pass,setPass]=useState("")
  const passref= useRef(null)
  
  const passGenerator= useCallback(()=>{
     let Password="";
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberallowed) str+="0123456789"
     if(charallowed) str+="!@#$%^&*()_+=-}{[]:;?/>.<,|\/"

     for (let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1) 
      Password+=str.charAt(char);
     }
     setPass(Password)


},[length,numberallowed,charallowed,setPass])

const copyPassToClipboard= useCallback(()=>{
   passref.current?.select()
   window.navigator.clipboard.writeText(pass)
},[pass])

useEffect(()=>{
  passGenerator()
},[length,charallowed,numberallowed,passGenerator])


  return (
    <>
      <div className= ' bg-gray-700 text-orange-500 px-4 py-3 my-8 w-full max-w-md mx-auto top-20 relative rounded-xl'>
        <h1 className='text-white text-2xl text-center my-3' >Password Generator</h1>
        <div className='flex shadow rounded -lg overflow-hidden mb-4'>
          <input 
          type='text'
          value={pass}
          className='w-full py-1 px-3 outline-none'
          placeholder='Password'
          readOnly
          ref={passref}
          />
          <button onClick={copyPassToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2' >
         <div className='flex items-center gap-x-1' >
          <input 
          type="range" 
          max={100}
          min={6}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label> length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
         <input 
         type='checkbox'
         defaultChecked={numberallowed} 
         onChange={()=>{
          setNumberallowed((prev)=>!prev)
         }}
         />
         <label >Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charallowed}
              onChange={()=>{
                setCharallowed((prev)=>!prev)
              }} 
              />
              <label>Characters</label>
        </div>

        </div>

      </div>
    </>
  )
}

export default App
