import { createAction, handleActions } from "redux-actions";

/**
 * 액션 타입을 정의합니다.
 * 액션 타입 대문자 = '모듈 이름/액션 이름'
 * -> 액션 이름이 출동되는 것을 방지합니다.
 */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// 초기 상태
const initialState = 0; // 상태는 꼭 객체일 필요가 없습니다. 숫자도 작동

// 리듀서 함수
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
