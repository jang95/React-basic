import React, {Component} from 'react';

class EventPractice extends Component {

  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>이벤트 연슴</h1>
        <input
          type = "text"
          name = "message"
          placeholder='아무거나 입력해 보세요'
          value={this.state.message}
          onChange={
            /**
             * @param {*} e SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
             *              네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서
             *              HTML 이벤트를 다룰 때랑 똑같이 사용
             * 
             * SyntheticEvent는 네이티브 이벤트와 달리 끝나면 바로 초기화
             */
            (e) => {
              this.setState({
                message: e.target.value
              });
              console.log(e.target.value);
            }
          }
        />
        <button onClick={
          () => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
        }}>확인</button>
      </div>
    );
  }
}

export default EventPractice;