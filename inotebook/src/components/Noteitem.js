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


        <div class="notes-style">
          <div class="n-tag">
            {!note.tag ? "General" : note.tag}
          </div>
          <div class="body">
            <h5 class="n-title">{note.title}</h5>
            <p class="n-desc">{note.description}</p>

          </div>
          <div class="card-footer">
            <i className="fa-solid fa-trash mx-4" onClick={() => { deleteNote(note._id) }}></i>
            <i className="fa-solid fa-pen mx-1" onClick={() => { editNote(note) }}></i>
          </div>
        </div>
      </div>


    </>
  )
}

export default Noteitem