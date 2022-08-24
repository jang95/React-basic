/**
 * 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태 받아오고
 * 액션 디스패치
 * - 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부름
 */
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
// 액션 생성 함수 부르고, 액션 객체를 만든 뒤 디스패치
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// // 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정
// const mapStateProps = (state) => ({
//   number: state.counter.number,
// });

// /**
//  * 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 설정
//  * @param {*} dispatch store의 내장 함수
//  */
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//     console.log('increase');
//   },
//   decrease: () => {
//     dispatch(decrease());
//     console.log('decrease');
//   },
// });

// export default connect(mapStateProps, mapDispatchToProps)(CounterContainer);

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
