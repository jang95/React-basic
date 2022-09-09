const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); // 액션 타입으로 log를 그룹화함
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

// const loggerMiddleware = function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {};
//   };
// };

/**
 * 미들웨어는 결국 함수를 반환하는 함수를 반환하는 함수입니다.
 * 함수에서 파라미터로 받아오는 store는 리덕스 스토어 인스턴스를,
 *                             action은 디스패치된 액션을 가리킵니다.
 * next 파라미터는 함수 형태이며, store.dispatch와 비슷한 역할을 합니다.
 * 하지만 큰 차이점이 있는데,
 * next(action)을 호출하면 그다음에 처리해야 할 미들웨어에 액션을 넘겨주고,
 * 만약 그다음 미들웨어가 없다면 리듀서에세 액션을 넘겨준다는 것입니다.
 */

/**
 * 미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 처리합니다.
 * 만약 미들웨어에서 next를 사용하지 않으면 액션이 리듀서에 전달되지 않습니다.
 * 즉, 액션이 무시되는 것이죠
 */

export default loggerMiddleware;
