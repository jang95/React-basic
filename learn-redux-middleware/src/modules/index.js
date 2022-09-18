import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
// import sample from "./sample";
import loading from "./loading";

// 루트 리듀서
const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
