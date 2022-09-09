import { handleAction } from "redux-actions";
import * as api from "../lib/api";

// 액션 타입을 선언
// 한 요청당 세 개를 만들어야 함 -> 요청, 성공, 실패

const GET_POST = "sample/GET_POST";
const GET_POST_SUEESS = "sample/GET_POST_SUEESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUEESS = "sample/GET_USERS_SUEESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치합니다.

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUEESS,
      payload: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    }); // 에러 발생
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUEESS,
      patload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

// 초기 상태 선언
// 요청 로딩 중 상태는 loading이라는 객체에서 관리

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleAction({
  [GET_POST]: (state) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: true, // 요청 시작
    },
  }),
  [GET_POST_SUEESS]: (state, actions) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false, // 요청 완료
    },
    post: actions.payload,
  }),
  [GET_POST_FAILURE]: (state, actions) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false, // 요청 완료
    },
  }),
  [GET_USERS]: (state) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: true, // 요청 시작
    },
  }),
  [GET_USERS_SUEESS]: (state, actions) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false, // 요청 완료
    },
    post: actions.payload,
  }),
  [GET_USERS_FAILURE]: (state, actions) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false, // 요청 완료
    },
  }),
});
