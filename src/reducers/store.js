import { legacy_createStore as createStore } from "redux";
import combineReducers from "./index";

const store = createStore(combineReducers);

export default store;
