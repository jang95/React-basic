/**
 * 액션 타입 정의
 * 액션 타입 대문자 = '모듈 이름/액션 이름'
 * -> 액션 이름이 충돌되는 것을 방지
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/**
 * 액션 생성 함수
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// export const actionIncrease = () => ({ type: INCREASE });
// export const actionDecrease = () => ({ type: DECREASE });

/**
 * 초기 상태 및 리듀서 함수 만들기
 */

const initalState = {
  number: 0,
};

function counter(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
