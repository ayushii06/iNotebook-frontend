
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import MyNotes from './components/MyNotes';

function App() {
  return (
    <div className='text-white' >
      <NoteState>
        <BrowserRouter>
        {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home key="home" ></Home>}></Route>
          <Route path="/mynotes" element={<MyNotes key="mynotes"></MyNotes>}></Route>
          <Route path="/login" element={<Login key="login"></Login>}></Route>
          <Route path="/signup" element={<SignUp key="signup"></SignUp>}></Route>
        
          
        </Routes>  
  
  
        </BrowserRouter>  
        </NoteState>
    </div>
  );
}

export default App;
