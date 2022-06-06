import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

/**
 * 이 코드는 App이라는 컴포넌트를 만들어 줍니다.
 * function 키워드를 사용하여 컴포넌트 제작 => 이러한 컴포넌트를 함수형 컴포넌트라고 부릅니다.
 * 프로젝트에서 컴포넌트를 렌더링하면(표출) 함수에서 반환하고 있는 내용을 나타냅니다.
 */

function App() {
  const name = '리액트';
  return (
    <div className="App">
      {/* 리액트 컴포넌트에서 요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야 할까?
        -> Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문
         
        꼭 아래 코드처럼 div 요소를 사용하는 것이 아니라 리액트 v16이상 부터 도입된 Fragment라는 기능을 사용할 수 있음
         => <Fragment></Fragment> or <></> */}
      <div>
        {/* JSX 안에서 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 {}로 감싸면 됩니다. */}
        <h1>{name} 안녕!</h1> 
        <h2>잘 작동하니?</h2>
      </div>
    </div>
  );
}

export default App;
