/**
 * 요청의 로딩 상태를 관리하는 작업 개선
 * 기존에는 리듀서 내부에서 각 요청에 관련된 액션이 디스패치될 때 마다 로딩 상태를
 * 변경해 줌
 * => 로딩 상태만 따로 관리하는 리덕스 모듈을 생성하여 처리
 */

import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

/**
 * 요청을 위한 액션 타입을 payload로 설정(예: "sample/GET_POST").
 */

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

const loadging = handleActions(
  {
    [START_LOADING]: (state, actino) => ({
      ...state,
      [actino.payload]: true,
    }),
    [FINISH_LOADING]: (state, actino) => ({
      ...state,
      [actino.payload]: false,
    }),
  },
  initialState
);

export default loadging;
