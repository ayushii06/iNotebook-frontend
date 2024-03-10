import { useContext } from 'react';
import React from 'react'
import noteContext from '../context/notes/NoteContext';
import { useState } from 'react';

const AddNote = () => {
    const context =useContext(noteContext);
    const {addNote}=context;

    const [note,setNote]=useState({title:"",description:"",tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container" style={{"backgroundColor":"#00000061" ,"border-radius":"6px"}}>
    <div className="container-addnote my-5" >
 
        <div className="text-center p-5"> ADD A NOTE</div>
    <form>
      
      <div className="mb-3 d-flex gap-4 justify-content-center align-items-center">
        <label htmlFor="title" className="title  mx-3 w-25">Title</label>
        <input type="text" name="title" id="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
      </div>
      <div className="mb-3 d-flex gap-4 justify-content-center align-items-center">
        <label htmlFor="description" className="description  mx-3 w-25">Description</label>
        <input type="text" name="description" id="description" value={note.description}  onChange={onChange}/>
      </div>
      <div className="mb-3 d-flex gap-4 justify-content-center align-items-center">
        <label htmlFor="tag" className="tag  mx-3 w-25">Tag</label>
        <input type="text" name="tag" id="tag" value={note.tag}  onChange={onChange}/>
      </div>
      <div className="my-5 d-flex justify-content-center align-items-center">
      <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="add-note btns" onClick={handleClick}>Add Note</button>
      </div>
    </form>
    </div>

    </div>
  )
}

export default AddNote