import React,{ useRef } from 'react'
import './signup.scss';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Header from '../../components/header/Header';

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
               
                const res = await axios.post("https://petitcoeur.herokuapp.com/api/users/signup", user)
                console.log(res.data)
                history.push('/login')

            } catch(err){
                console.log(err)

            }
        };

        
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
                  <span className="loginSignupButton">Already have an ancount?
                    <Link to="/login" className="loginSignupButton">Log In</Link>
                  </span>
                  <form action="" className="loginForm" onSubmit={ handleSignup }>
                        <input type="text" className="loginInput" ref={ username} placeholder="Username" required />
                        <input type="email" className="loginInput" ref={ email } placeholder="Email" required />
                        <input type="password" className="loginInput" ref={ password } placeholder="Password" required />
                        <input type="password" className="loginInput" ref={ confirmePassword } placeholder="Confirme Password" required />
                        <button className="loginButton" type="submit">Signup</button>
                       

                  </form>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
