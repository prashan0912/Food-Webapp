import React, { useState, useEffect } from 'react'
import './Login.css'
export const Login = ({ setShowLogin }) => {
    const [currentState, setCurrState] = useState("Sign Up")


    useEffect(() => {
        // Disable scroll on mount
        document.body.style.overflow = 'hidden';
        return () => {
            // Enable scroll on unmount
            document.body.style.overflow = '';
        };
    }, []);



    return (
        <div className='Login-Container'>
            <form action="" className='Login-form'>
                <div className="login-title">
                    <div className="login-popup-title"><h1>{currentState}</h1></div>
                    <button className='cross-button' onClick={() => setShowLogin(false)} type="button" >&times;</button>

                </div>

                <div className="input-taken">
                    {currentState == "Login" ? <></> : <input type="text" placeholder='Enter UserName' required />}

                    <input type="text" placeholder='Enter Email' required />
                    <input type="text" placeholder='Password' required />
                </div>
                <div className="login-popup-condition">
                    {currentState == "Login" ? <></> : (<><input type="checkbox" required /> <p>Accepting all policies of Food WebApplication </p></>)
                    }
                </div>
                <button className='submit-button'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>

                {currentState == "Login" ?
                    <div><p>Create an Account <span onClick={() => setCurrState("Sign Up")} className='login-link'>Click here</span></p></div> :
                    <div><p>Already have an account ?</p><span onClick={() => setCurrState("Login")} className='login-link'>Login In</span></div>}
                {/* <button type='submit'> Submit </button> */}

            </form>
        </div>
    )
}
export default Login