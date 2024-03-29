import React from 'react'
import { useEffect } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";

export const Navbar = () => {
  let location = useLocation();
  let Navigate=useNavigate();
  useEffect(()=>{
   
  },[location]);
  const handleLogout=()=>{
    localStorage.removeItem('token');
    Navigate('/login')
  }

  return (
    <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid white">
            <Link className="navbar-brand" to="/">Notes</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/mynotes">MyNotes</Link>
                </li>
            
            </ul>

        

           {!localStorage.getItem('token')? <form className="d-flex">
            <Link className="btns" to='/login' role="button">Login</Link>
            <Link className="btns" to='/signup' role="button">SignUp</Link>
            </form>:<form>
            <button className="btns" onClick={handleLogout}>Log Out</button>
            </form>
            }
            
            </div>
        </div>
</nav>

    </>
  )
}

export default Navbar;