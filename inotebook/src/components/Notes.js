import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
  let login=useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes ,editNote} = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
      login('/login')
    }
    
    // eslint-disable-next-line
  }, [])

  const refclose=useRef(null)

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })


  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const updateNotes = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }
  
  const handleClick=(e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();

  }


  const ref = useRef(null)

  return (
    <>
      <AddNote />
      <button type="button" ref={ref} className="btns" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{'display':'none'}}>
        Launch demo modal
      </button>

      <div className="modal fade text-black" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">EDIT NOTE</h1>
              <button type="button" className="btns" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="etitle  mx-3 w-25">Title</label>
                  <input type="text" name="etitle" value={note.etitle} id="etitle" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" value={note.description} className="edescription  mx-3 w-25">Description</label>
                  <input type="text" name="edescription" id="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="etag  mx-3 w-25">Tag</label>
                  <input type="text" name="etag" value={note.etag} id="etag" onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btns" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btns">Update Notes</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-center my-4 display-6'>Your notes </h2>
      <div className="no-text" >
        {notes.length===0 && `No notes to display`}
        </div>
      <div className='note-list' >        
        {
          notes.map((note) => {
            return <Noteitem key={note._id} note={note} editNote={updateNotes} />
          })
        }
      </div>
    </>
  )
}

export default Notes