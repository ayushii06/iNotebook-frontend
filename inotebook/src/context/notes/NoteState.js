import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://65ed7bd9c99fd9488a56628c--inotebookbackend.netlify.app/api/notes/fetchallnotes"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //GET ALL NOTES
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'auth-token': localStorage.getItem('token')

      },
    });
    const json = await response.json()

    setNotes(json)
  }



  //ADD A NOTE

  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'auth-token': localStorage.getItem('token')

      },

      body: JSON.stringify({title, description, tag}),
    });

    const note = await response.json()
    setNotes(notes.concat(note))
  }

  //UPDATE A NOTE
  const editNote = async (id, title, description, tag) => {
    //fetch api

   await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'auth-token': localStorage.getItem('token')

      },

      body: JSON.stringify({title, description, tag}),
    });



    let newNotes= JSON.parse(JSON.stringify(notes))
    //logic to edit in client
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
      
      
    }
    setNotes(newNotes);
  }

  //DELETE A NOTE
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenode/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')

      },
    });
    response.json();
   
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }



  return (

    <NoteContext.Provider value={{notes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>

  )
}


export default NoteState;