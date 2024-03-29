// import { handleActions } from "redux-actions";
import * as api from "../lib/api";
// import createRequsestThunk from "../lib/createRequestThunk";
import { createAction, handleActions } from "redux-actions";
// import { call, put, takeLatest } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
// import { startLoading, finishLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입을 선언
// 한 요청당 세 개를 만들어야 함 -> 요청, 성공, 실패

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치합니다.

// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); // 에러 발생
//     throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

// export const getPost = createRequsestThunk(GET_POST, api.getPost);
// export const getUsers = createRequsestThunk(GET_USERS, api.getUsers);

// 초기 상태 선언
// 요청 로딩 중 상태는 loading이라는 객체에서 관리

// const initialState = {
//   loading: {
//     GET_POST: false,
//     GET_USERS: false,
//   },
//   post: null,
//   users: null,
// };

const initialState = {
  post: null,
  users: null,
};

// const sample = handleActions(
//   {
//     [GET_POST]: (state) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: true, // 요청 시작
//       },
//     }),
//     [GET_POST_SUCCESS]: (state, actions) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: false, // 요청 완료
//       },
//       post: actions.payload,
//     }),
//     [GET_POST_FAILURE]: (state, actions) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: false, // 요청 완료
//       },
//     }),
//     [GET_USERS]: (state) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_USERS: true, // 요청 시작
//       },
//     }),
//     [GET_USERS_SUCCESS]: (state, actions) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_USERS: false, // 요청 완료
//       },
//       users: actions.payload,
//     }),
//     [GET_USERS_FAILURE]: (state, actions) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_USERS: false, // 요청 완료
//       },
//     }),
//   },
//   initialState
// );

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, actions) => ({
      ...state,
      post: actions.payload,
    }),
    [GET_USERS_SUCCESS]: (state, actions) => ({
      ...state,
      users: actions.payload,
    }),
  },
  initialState
);

export default sample;
