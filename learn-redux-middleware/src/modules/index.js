import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";

// 루트 리듀서
const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;
