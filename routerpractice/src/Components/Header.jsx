import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul className='flex flex-col gap-2 '>
        <li>
          <NavLink to="/" className={({isActive})=>`py-2 ${isActive ?"text-orange-500" :"text-gray-500" }`}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive})=>`py-2 ${isActive ?"text-orange-500" :"text-gray-500" }`}
          >Contact</NavLink>
        </li>
        <li>
           <NavLink to="/about" className={({isActive})=>`py-2 ${isActive ?"text-orange-500" :"text-gray-500" }`}
          >About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header

