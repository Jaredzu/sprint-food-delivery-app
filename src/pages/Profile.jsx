import React from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../api'

const Profile = () => {

  let navigate = useNavigate()

  const handleLogout = () => { 
    auth.logout()
    navigate("/login")
  }

  return (
    <>
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile