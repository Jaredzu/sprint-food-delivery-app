import React from 'react'
import { auth } from '../api'

const Profile = () => {

  const handleLogout = () => { 
    auth.logout()
  }

  return (
    <>
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile