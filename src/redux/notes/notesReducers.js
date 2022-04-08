import axios from "axios";
import {
  setNotes,
  ADD_NOTE,
  SET_NOTES,
  DEL_NOTE,
  delNote,
  addNote,
} from "./notesActions";
// import { v4 as uuid } from "uuid";

const initialState = {
  notes: [],
};
const URL = "http://localhost:3001/notes";
export const notesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { noteBody: action.payload, id: action.id }],
      };

    case SET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case DEL_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note !== action.payload),
      };
    default:
      return state;
  }
};

export const postNote = (note, id) => async (dispatch, getState) => {
  await axios.post(URL, { noteBody: note, id: id });
  dispatch(addNote(note, id));
};

export const fetchNotes = () => async (dispatch, getState) => {
  const res = await axios.get(URL);
  const fetchedNotes = await res.data;
  dispatch(setNotes(fetchedNotes));
};

export const axiosDelNote = (note) => async (dispatch, getState) => {
  await axios.delete(`${URL}/${note.id}`);
  dispatch(delNote(note));
};
