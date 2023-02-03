import { createStore } from "redux";
import reducer from "./reducer";

// debug documentation: https://github.com/reduxjs/redux-devtools

const debug = true;

const store = !debug ? createStore(reducer) : createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;