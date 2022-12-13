import { combineReducers } from "redux";
import { dateReducer } from "./dateReducer";
import { reducer } from "./reducer";

export default combineReducers({
  date: dateReducer,
  state: reducer,
});
