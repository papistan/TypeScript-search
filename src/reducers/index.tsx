import { combineReducers } from "redux";
import { changeLocation, events } from "./search";

const rootReducer = combineReducers({
  changeLocation,
  events
});

export default rootReducer;
