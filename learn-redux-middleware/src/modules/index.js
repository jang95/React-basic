import { combineReducers } from "redux";
import counter from "./counter";

// 루트 리듀서
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
