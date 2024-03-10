import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://65ed7bd9c99fd9488a56628c--inotebookbackend.netlify.app/api/notes/fetchallnotes/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",


            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //Save the auth taken and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/mynotes")

        }
        else {
            alert("Invalid Credentials")
        }

    }
    return (
        <>

            <div className="container-form">
                <h1 className="login-heading">Log in to your account </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group login">
                        <input type="email" value={credentials.email} onChange={onChange} placeholder="email" id="email" name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group login">

                        <input type="password" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="password" autoComplete="on" />
                    </div>
                    <button className="btns">log in</button>

                </form>

                <div className="footer">
                    <div className="first-text">don't have an account yet ?</div>
                    <div className="register"><Link to="/signup">create account</Link></div>
                </div>
            </div>
        </>
    )
}

export default Login