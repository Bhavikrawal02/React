import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
  return (
    <div>
      {console.log(data.name)}
      <h1>Welcome : {data.name ?data.name:'User'}</h1>
    </div>
  )
}

export default Github

export async function githubinfo(){
const res= await fetch('https://api.github.com/users/Bhavikrawal02')
return res.json()
}
