import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note, index) => {
        return <NoteItem key={index} note={note} />;
      })}
    </div>
  );
};

export default Notes;
