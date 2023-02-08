import React from 'react'
import { Outlet } from 'react-router'

const Navbar = () => {
    return (
        <>
            <h1>
                Navbar
            </h1>
            <Outlet />
        </>
    )
}

export default Navbar