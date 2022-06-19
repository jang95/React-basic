import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  constructor(props) {
    super(props);
    /**
     * 함수가 호출될 때 this는 호출불에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서
     * 메서드와 this의 관계가 끊어져 버림
     * => 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 작업 필요
     *    만약 바인딩 하지 않는다면 {undefined}를 가리키게 됨
     */
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);

    /**
     * Property Initializer Syntax
     * 바벨의 transform-class-properties 문법을 사용하여
     * 화살표 함수 형태로 메서드를 정의하면 위의 바인딩 작업을 하지 않아도 괜찮음
     */
  }

  /**
   * 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제값이 key값으로 사용됨
   * @param e.target.name: 특정 이벤트가 발생하는 태그의 'name'을 가져온다.
   * 밑에서의 [e.target.name]에는 [username, message]의 형식으로 키 값이 들어가 있음
   */
  handlerChange = (e) => {
    this.setState({
      // message: e.target.value
      [e.target.name]: e.target.value,
    });
    console.log('handlerChange', [e.target.name]);
  };

  handlerClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  /**
   * 엔터를 눌렀을 때 handlerClick 메서드 호출
   */
  handlerKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handlerClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연슴</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          // onChange={
          //   /**
          //    * @param {*} e SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
          //    *              네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서
          //    *              HTML 이벤트를 다룰 때랑 똑같이 사용
          //    *
          //    * SyntheticEvent는 네이티브 이벤트와 달리 끝나면 바로 초기화
          //    */
          //   (e) => {
          //     this.setState({
          //       message: e.target.value
          //     });
          //     console.log(e.target.value);
          //   }
          // }
          onChange={this.handlerChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handlerChange}
          onKeyPress={this.handlerKeyPress}
        />
        {/* <button onClick={
          () => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
        }}>확인</button> */}
        <button onClick={this.handlerClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
