import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "./rootReducers";
import logger from "redux-logger";

const middleWare = applyMiddleware(thunk, logger);

export const store = createStore(rootReducers, composeWithDevTools(middleWare));
