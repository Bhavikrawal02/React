import React, { useState } from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

function Login() {
    const {setUser}= useContext(UserContext)
    const [Username,SetUsername]= useState('')
    const[Password,SetPassword]=useState('')

    const HandleSubmit=(e)=>{
         e.preventDefault()
         setUser({Username,Password})
    }

  return (
    <div>
      <h2> Login </h2>

      <input 
        type="text"
        placeholder='Username'
        value={Username}
        onChange={(e)=>SetUsername(e.target.value)}
        />

      <input type="text"
       placeholder='PassWord'
       value={Password}
       onChange={(e)=>SetPassword(e.target.value)} 
       />

      <button onClick={HandleSubmit}>Submit</button>

    </div>
  )
}

export default Login

