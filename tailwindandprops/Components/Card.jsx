import React from 'react'

const Card = ({title,name}) => {
    // console.log(props)
    
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-5">
        <img
          src="https://images.pexels.com/photos/2531892/pexels-photo-2531892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
      </>
  )
}

export default Card
