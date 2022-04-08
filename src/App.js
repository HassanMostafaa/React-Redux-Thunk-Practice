import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddNoteForm } from "./componenets/AddNoteForm";
import { fetchNotes, axiosDelNote } from "./redux/notes/notesReducers";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notesReducers.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  const handleDel = (note) => {
    dispatch(axiosDelNote(note));
  };
  return (
    <div className="App container">
      <h1>App</h1>
      <hr />
      <AddNoteForm />

      {notes &&
        notes.map((note, ix) => (
          <p key={ix}>
            {note.noteBody} <button onClick={() => handleDel(note)}>Del</button>
          </p>
        ))}
    </div>
  );
}

export default App;
