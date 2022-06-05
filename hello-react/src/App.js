import logo from './logo.svg';
import './App.css';

/**
 * 이 코드는 App이라는 컴포넌트를 만들어 줍니다.
 * function 키워드를 사용하여 컴포넌트 제작 => 이러한 컴포넌트를 함수형 컴포넌트라고 부릅니다.
 * 프로젝트에서 컴포넌트를 렌더링하면(표출) 함수에서 반환하고 있는 내용을 나타냅니다.
 * 
 * 함수에서 반환하는 내용을 보면 마치 HTML을 작성한 것 처럼 보이는데 이 코드는 HTML이 아니라
 * <JSX>라고 부릅니다.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
