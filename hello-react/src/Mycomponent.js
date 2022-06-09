import React from 'react';

const Mycomponent = props => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name} 입니다. <br/>
      {/* 컴포넌트 태그 사이의 내용을 보여주는 props => children */}
      children 값은 {props.children} 입니다.
    </div>
    )
};

/**
 * props의 값을 부모 컴포넌트에서 따로 지정하지 않았을 때 보여 줄 기본값 설정
 */
Mycomponent.defaultProps = {
  name: '기본 이름'
};

// 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정
export default Mycomponent;