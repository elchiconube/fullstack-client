import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import httpClientMiddleware from "./config";
import reducers from "../reducers/index";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, httpClientMiddleware()),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

export default store;
