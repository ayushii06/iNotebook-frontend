import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, editNote } = props;
  return (
    <>
      <div className="notes-container" >


        <div className="notes-style">
          <div className="n-tag">
            {!note.tag ? "General" : note.tag}
          </div>
          <div className="body">
            <h5 className="n-title">{note.title}</h5>
            <p className="n-desc">{note.description}</p>

          </div>
          <div className="card-footer">
            <i className="fa-solid fa-trash mx-4" onClick={() => { deleteNote(note._id) }}></i>
            <i className="fa-solid fa-pen mx-1" onClick={() => { editNote(note) }}></i>
          </div>
        </div>
      </div>


    </>
  )
}

export default Noteitem