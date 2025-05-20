
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Bhavikrawal02')
    //     .then(response => response.json())
    //     .then(data =>
    //         {
    //             console.log(data)
    //             setData(data)
    //         })
    // },[])

  return (
    <>
    <div className="bg-gray-400 text-center flex flex-col gap-2 items-center" >
      <div className='inline' >Github followers : {data.followers}</div>
      <img className='w-1/12 m-2' src={data.avatar_url} alt="Github pic" />
    </div>
    </>
  )
}

export default Github

export const githubInfo = async()=>{
   const res= await fetch('https://api.github.com/users/Bhavikrawal02')
   return res.json()
}