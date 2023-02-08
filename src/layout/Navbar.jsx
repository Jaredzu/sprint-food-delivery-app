import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <h1>
                Navbar
            </h1>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/search" >
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/orders" >
                        Orders
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile" >
                        Profile
                    </Link>
                </li>

            </ul>
            <Outlet />
        </>
    )
}

export default Navbar