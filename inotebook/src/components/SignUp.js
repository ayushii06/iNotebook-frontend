import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://65ed7bd9c99fd9488a56628c--inotebookbackend.netlify.app/api/notes/fetchallnotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",


            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //Save the auth taken and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/mynotes")

        }
        else {
            alert(json.error, "Invalid Credentials")
        }

    }
    return (

        <>
            <div className="container-form">
                <h1 className="login-heading">REGISTER AN ACCOUNT</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <input type="text" className='form-control' value={credentials.name} onChange={onChange} id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className='form-control' value={credentials.email} onChange={onChange} id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" autoComplete="on" />
                        <h4>Must be at least 6 characters long</h4>
                    </div>
                    <button id="create-acct" className="btns">Create Account</button>
                </form>

                <div className="footer">
                    <div className="first-text">already have an account ?</div>
                    <div className="register"><Link to="/login">Log in </Link></div>
                </div>
            </div>

        </>
    )
}

export default SignUp