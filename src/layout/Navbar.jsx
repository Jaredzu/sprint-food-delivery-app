import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <h1 className='m-1'>
                Navbar
            </h1>
            <nav className="navbar navbar-expand-sm bg-light">

                <ul className="navbar-nav d-flex flex-row ">
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/" >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/search" >
                            Search
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/orders" >
                            Orders
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/profile" >
                            Profile
                        </Link>
                    </li>

                </ul>

            </nav>

            <div className="container p-2">

                <Outlet />

            </div>
        </>
    )
}

export default Navbar