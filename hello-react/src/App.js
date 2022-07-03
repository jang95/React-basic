// import React from "react";
import React, {Component} from 'react';
// import Mycomponent from './Mycomponent';
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractics";
// import EventPracticeFun from "./EventPractics_Fun";
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';

import IterationSample from './IterationSample';

// const App = () => {
//   return <EventPracticeFun />;
// };

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => {this.scrollBox=ref}}/>
//         {/* 화살표 함수를 사용하지 않을 경우 컴포넌트가 처음 렌더링될 때는 함수의 값이
//         'undefinded'이므로 값을 읽어 오는 과정에서 오류가 발생
//         => 화살표 함수를 사용할 경우 버튼을 누를 때(즉, 이미 한 번 렌더링 해서 this.scroll를 설정한 시점) */}
//         <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <IterationSample/>
    );
  }
}

export default App;
