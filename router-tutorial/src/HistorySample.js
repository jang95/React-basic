// import React, { Component } from "react";
// import React, { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

// class HistorySample extends Component {
//   // navigate = useNavigate();
//   // 뒤로 가기
//   handlerBack = () => {
//     this.props.history.goBack();
//   };

//   // 홈으로 이동
//   handlerGoHome = () => {
//     this.props.history.push("/");
//   };

//   componentDidMount() {
//     // 이것을 설정하고 나면 페이지에 변화가 생기려고 할 때 마다 정말 나갈 것인지를 질문함
//     // this.unblock = this.props.history.block("정말 떠나실 건가요?");
//     console.log("this.props.history", this.props.history);
//     console.log("useNavigatey", useNavigate);
//   }

//   componentWillUnmount() {
//     // 컴포넌트가 언마운트되면 질문을 멈춤
//     if (this.unblock) {
//       this.unblock();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handlerBack}>뒤로</button>
//         <button onClick={this.handlerGoHome}>홈으로</button>
//       </div>
//     );
//   }
// }

const HistorySample = () => {
  // useEffect (() => {

  // }, [history])

  const history = useNavigate();

  // 뒤로 가기
  const handlerBack = () => {
    history(-1);
  };

  // 홈으로 이동
  const handlerGoHome = () => {
    // history("../succes", { replace: true });
    history("/");
  };

  return (
    <div>
      <button onClick={handlerBack}>뒤로</button>
      <button onClick={handlerGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
