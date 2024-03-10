import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="container" style={{"height":"100vh","padding":"10vh"}}>
      <h1 className="text-center my-3 display-6">Hey There!</h1>
      <h1 className="text-center display-5 ">Welcome to the "iNoteBook"</h1>
      <h3 className="text-center lead my-5">iNoteBook provides users with a versatile platform for efficient note-taking and organisation.</h3>
      <div className="text-center my-5">
      {!localStorage.getItem('token')?<Link class="btns" to="/signup" role="button">Get Started</Link>:<Link class="btns" to="/mynotes" role="button">My Notes</Link>}
      </div>
    </div>
    </>
  )
}

export default Home