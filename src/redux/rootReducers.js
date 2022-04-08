import { combineReducers } from "redux";
import { notesReducers } from "./notes/notesReducers";

export const rootReducers = combineReducers({
  notesReducers,
});
