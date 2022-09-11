/**
 * nodules/sample.js에서....
 * API를 요청해야 할 때 마다 17줄 정도 되는 thunk 함수를 작성하는 것과
 * 로딩 상태를 리듀서에서 관리하는 작업은 귀찮을 뿐 아니라 코드도 길어지게 함
 */
import { startLoading, finishLoading } from "../modules/loading";

export default function createRequsetThunk(type, request) {
  // 성공 및 실패 액션 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); // 성공
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 에러 발생
      dispatch(startLoading(type));
      throw e;
    }
  };
}
