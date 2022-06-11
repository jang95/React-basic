import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * 함수형 컴포넌트
 */
// // 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용 가능
// const Mycomponent = ({ name, favoriteNumber, children}) => {
//   // 비구조화 할당(구조 분해 문법)
//   // const { name, children} = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다. <br/>
//       {/* 컴포넌트 태그 사이의 내용을 보여주는 props => children */}
//       children 값은 {children} 입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//     )
// };

/**
 * 클래스형 컴포넌트
 */

class Mycomponent extends Component {
  // class 내부에서 defaultProps, prototype 지정하는 방식
  static defaultProps = {
    name: "기본 이름",
  };

  static PropTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

/**
 * props의 값을 부모 컴포넌트에서 따로 지정하지 않았을 때 보여 줄 기본값 설정
 */
// Mycomponent.defaultProps = {
//   name: "기본 이름",
// };

// Mycomponent.prototype = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정
export default Mycomponent;
