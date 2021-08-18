import React,{ useRef } from 'react'
import './signup.scss';
import { useHistory } from 'react-router';
import axios from 'axios';

function Signup() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmePassword = useRef();
    const history = useHistory()
  

    const handleSignup = async (e) => {
        e.preventDefault();
        if( confirmePassword.current.value !== password.current.value){
            confirmePassword.current.setCustomValidity("Password does not match !")

        }else{
            const user = 
             {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                confirmePassword: confirmePassword.current.value,
            }

            try{
               
                const res = await axios.post("http://localhost:8800/api/users/signup", user)
                console.log(res.data)
                history.push('/login')

            } catch(err){
                console.log(err)

            }
        };

        
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginLeft">
                    <h3 className="loginLogo">On patage</h3>
                    <span>we share our things </span>
                </div>
                <div className="loginRight">
                    <form action="" className="loginForm" onSubmit={ handleSignup }>
                        <input type="text" className="loginInput" ref={ username} placeholder="Username" required />
                        <input type="email" className="loginInput" ref={ email } placeholder="Email" required />
                        <input type="password" className="loginInput" ref={ password } placeholder="Password" required />
                        <input type="password" className="loginInput" ref={ confirmePassword } placeholder="Confirme Password" required />
                        <button className="loginButton" type="submit">Signup</button>
                        <button className="loginSignupButton">Log into Account</button>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
