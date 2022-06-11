import React, { Component } from "react";

class Counter extends Component {
  /**
   * 컴포넌트의 생성자 메서드
   */
  constructor(props) {
    super(props); // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성사 함수 호출
    // state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하면 state에 새로운 값을 넣을 수 있음

            // this.setState({ number: number + 1 });

            /**
             * [3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기]
             * this.state를 사용한다고 해서 state 값이 바로 바뀌지는 않음
             * => 객체 대신에 함수를 인자로 넣어주는 방식
             */
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });

            /**
             * 화살표 함수에서 바로 객체를 반환하도록 했기 때문에
             * prevState => ({})와 같은 형태
             */
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            /**
             * [3.4..1.4 this.setState가 끝난 후 특정 작업 실행]
             */
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
