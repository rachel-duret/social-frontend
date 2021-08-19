import React,{ useRef, useContext} from 'react'
import './login.scss';
import { loginCall } from '../../apiCalls';
import { AuthContext} from '../../context/AuthContext'
import {CircularProgress} from '@material-ui/core'



function Login() {
    const email = useRef();
    const password= useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
   
    
    

    const handleLogin = (e) =>{
        e.preventDefault()
        loginCall(
            {email: email.current.value, password: password.current.value},
            dispatch
            
        );
       
    };
    
   
   

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginLeft">
                    <h3 className="loginLogo">On patage</h3>
                    <span>we share our things </span>
                </div>
                <div className="loginRight">
                    <form action="" className="loginForm" onSubmit={handleLogin}>
                        <input type="email" className="loginInput" ref={email} placeholder="Email"required />
                        <input type="password" className="loginInput" ref={password} placeholder="Password" required />
                        <button className="loginButton" type="submit" disabled={ isFetching }>
                            { isFetching ? <CircularProgress color="white" size="20px" /> : "Login"}
                        </button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginSignupButton">Create a New Account</button>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login
