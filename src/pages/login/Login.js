import React,{ useRef, useContext} from 'react'
import './login.scss';
import { loginCall } from '../../apiCalls';
import { AuthContext} from '../../context/AuthContext'
import {CircularProgress} from '@material-ui/core'
import Header from '../../components/header/Header'
import {Link } from 'react-router-dom'



function Login() {
    const email = useRef();
    const password= useRef();
    const {  isFetching,  dispatch } = useContext(AuthContext);
   
    
    

    const handleLogin = (e) =>{
        e.preventDefault()
        loginCall(
            {email: email.current.value, password: password.current.value},
            dispatch
            
        );
       
    };
    
   
   

    return (
        <div className="login">
            <Header />
            <div className="loginContainer">
                <div className="loginLeft">
                    <h3 className="loginLogo">PetitCœur</h3>
                    <span>We share everthing of our little heart!<br/>They are not just an animal, they are families !</span>
                </div>
                <div className="loginRight">
                    <span className="loginSignupButton">Need an ancount?
                    <Link to="/signup" className="loginSignupButton">Sign Up</Link>
                    </span>
                 
                    <form action="" className="loginForm" onSubmit={handleLogin}>
                        <input type="email" className="loginInput" ref={email} placeholder="Email"required />
                        <input type="password" className="loginInput" ref={password} placeholder="Password" required />
                        <button className="loginButton" type="submit" disabled={ isFetching }>
                            { isFetching ? <CircularProgress color="white" size="20px" /> : "Login"}
                        </button>
                    </form>
                    <Link to="/forgotPassword" className="loginForgot">Forgot Password</Link>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Login
