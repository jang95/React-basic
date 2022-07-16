import React, { useReducer, useState } from "react";

// const Counter = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{value}</b>
//       </p>
//       <button onClick={() => setValue(value + 1)}> +1</button>
//       <button onClick={() => setValue(value - 1)}> -1</button>
//     </div>
//   );
// };

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1};
    case 'DECREMENT':
      return { value: state.value -1 };
    default:
      return state;
  }
}


const Counter = () => {
  /**
   * @param {Function} reducer 리듀서 함수
   * @param {any} value 해당 리듀서의 기본값
   * @const {any} state 현재 가리키고 있는 상태
   * @const {Function} dispatch 액션을 발생시키는 함수
   */
  const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      {/* dispatch(action) == dispatch({value: 0}) */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}> +1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}> -1</button>
    </div>
    );
}

export default Counter;
