import React, { useState } from "react";
import NoteContext from "./NoteContext.js";
const NoteState = (props) => {
  const host = "http://localhost:5000/api/";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    //To do API call
    const response = await fetch(`${host}notes/fetch-all-notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNjRkMzBmY2ZiZmIzMGMwMjIwNWVlIn0sImlhdCI6MTc0NzM0MDU5Mn0.GfNmuapquxssvVHkHs5wMWtNRWLBQWwRUfLQWEsN-ho",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  //add a note
  const addNote = async (title, description, tag) => {
    //To do API call
    const response = await fetch(`${host}notes/add-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNjRkMzBmY2ZiZmIzMGMwMjIwNWVlIn0sImlhdCI6MTc0NzM0MDU5Mn0.GfNmuapquxssvVHkHs5wMWtNRWLBQWwRUfLQWEsN-ho",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    await fetch(`${host}notes/update-note/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNjRkMzBmY2ZiZmIzMGMwMjIwNWVlIn0sImlhdCI6MTc0NzM0MDU5Mn0.GfNmuapquxssvVHkHs5wMWtNRWLBQWwRUfLQWEsN-ho",
      },
      body: JSON.stringify({ id, title, description, tag }),
    });
    //Logic to edit in client
    const newNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    );
    setNotes(newNotes);
  };

  //delete a note
  const deleteNote = async (noteId) => {
    const response = await fetch(`${host}notes/delete-note/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNjRkMzBmY2ZiZmIzMGMwMjIwNWVlIn0sImlhdCI6MTc0NzM0MDU5Mn0.GfNmuapquxssvVHkHs5wMWtNRWLBQWwRUfLQWEsN-ho",
      },
    });
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== noteId;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
