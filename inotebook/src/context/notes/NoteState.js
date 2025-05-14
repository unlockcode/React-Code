import React, { useState, setState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "68223e0f3fb52a5d73094bad",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T18:29:35.714Z",
      __v: 0,
    },
    {
      _id: "68224656b0a942c9f024e9e4",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T19:04:54.189Z",
      __v: 0,
    },
    {
      _id: "68224657b0a942c9f024e9e6",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T19:04:55.915Z",
      __v: 0,
    },
    {
      _id: "68223e0f3fb52a5d73094bad",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T18:29:35.714Z",
      __v: 0,
    },
    {
      _id: "68224656b0a942c9f024e9e4",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T19:04:54.189Z",
      __v: 0,
    },
    {
      _id: "68224657b0a942c9f024e9e6",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T19:04:55.915Z",
      __v: 0,
    },
    {
      _id: "68224657b0a942c9f024e9e6",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T19:04:55.915Z",
      __v: 0,
    },
    {
      _id: "68223e0f3fb52a5d73094bad",
      user: "681f199b50898fa9ef07b187",
      title: "My second Note",
      description: "Description to my first Note",
      tag: "test",
      date: "2025-05-12T18:29:35.714Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
