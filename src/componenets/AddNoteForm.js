import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addNote } from "../redux/notes/notesActions";
import { postNote } from "../redux/notes/notesReducers";
import { v4 as uuid } from "uuid";
export const AddNoteForm = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const addNoteBtn = () => {
    dispatch(postNote(note, uuid()));
    setNote("");
  };

  return (
    <div>
      <h3>Add Note Form</h3>

      <input
        type="text"
        placeholder="AddNote"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={addNoteBtn}>Add Note</button>
    </div>
  );
};
