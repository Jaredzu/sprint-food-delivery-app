import React, { useContext } from 'react'
import { firebase } from '../api'
import { auth } from '../context'
import logo from "../logos/logo.png"
import '../styles/Login.sass'


const Login = () => {

    const { user, setUser } = useContext(auth.authContext)


    const handleClick = async () => {
        try {
            const _user = await firebase.auth.login()
            setUser(_user)
            const { displayName, email, photoURL } = _user
            await firebase.users.createUser({ displayName, email, photoURL })

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className="login">
                <div className="container d-flex flex-column align-items-center ">
                    <img className="logo-app m-5" src={logo} alt="logo app" />
                    <h3 className="">Sign in</h3>
                    <p className="text-center">Login or create an account with your email to start ordering</p>
                </div>
                <div>
                    <p className='terms m-0'>By clicking the button next you accept</p>
                    <p className="terms text-decoration-underline">Terms of use</p>
                    <button className="btn btn-warning btnLogin w-100" onClick={handleClick}>Login</button>
                </div>
            </div>
        </>

    )
}

export default Login