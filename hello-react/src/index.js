/**
 * 리액트 프로젝트를 만들 때 node_modules라는 디렉토리도 함께 생선되는데, 프로젝트 생성 과정에서 node_modules 디렉터리에 react 모듈이 설치됨
 * 아래의 import 구문을 통해 리액트를 불러와서 사용할 수 있음
 * 
 * 여기서 한 가지 알아 둘 점
 * 이렇게 모듈을 불러와서 사용하는 것은 사실 원래 브라우저에느 없던 기능
 * 브라우저가 아닌 환경에서 자바스크립트를 실행할 수 있게 해주는 환경인 Node.js에서 지원하는 기능
 * 
 * 이러한 기능을 브라우저에서도 사용하기 위해 번들러를 사용
 * -> 파일을 묶듯이 연결하는 것
 * 
 * 대표적인 번들러로는 웹팩, Parcel, browserify라는 도구들이 있으며, 각 도구마다 특성이 다릅니다.
 * 리액트 프로젝는에서는 주로 웹팩을 사용하는 추세
 * 
 * 웹팩을 사용하면 SVG 파일과 CSS 파일도 불러와서 사용할 수 있음
 * 이렇게 파일을 불러오는 것은 웹팩의 로더(loader)라는 기능이 담당.
 * => babel-loader는 자바스크립트 파일들을 불러오면서 최신 자바스크립트 문법으로 작성된 코드를 바벨이라는 도구를 사용하여
 * ES5 문법으로 변환해 줍니다.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
