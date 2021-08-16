import React from 'react'
import './signup.scss';

function Signup() {
    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginLeft">
                    <h3 className="loginLogo">On patage</h3>
                    <span>we share our things </span>
                </div>
                <div className="loginRight">
                    <form action="" className="loginForm">
                        <input type="text" className="loginInput" placeholder="Username" />
                        <input type="email" className="loginInput" placeholder="Email" />
                        <input type="password" className="loginInput" placeholder="Password" />
                        <input type="password" className="loginInput" placeholder="Confirme Password" />
                        <button className="loginButton">Signup</button>
                        <button className="loginSignupButton">Log into Account</button>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
