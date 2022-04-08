export const ADD_NOTE = "ADD_NOTE";
export const DEL_NOTE = "DEL_NOTE";
export const SET_NOTES = "SET_NOTES";

export const addNote = (note, id) => {
  return {
    type: ADD_NOTE,
    payload: note,
    id,
  };
};

export const setNotes = (notes) => {
  return {
    type: SET_NOTES,
    payload: notes,
  };
};

export const delNote = (note) => {
  return {
    type: DEL_NOTE,
    payload: note,
  };
};
