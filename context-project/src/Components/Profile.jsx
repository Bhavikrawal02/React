import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user}= useContext(UserContext)

    if(!user) return <h1> User not logged in</h1>

    return (
        <h2>Welcome: {user}</h2>
    )
}

export default Profile
