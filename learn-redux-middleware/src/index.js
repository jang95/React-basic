import React from "react";
import ReactDOM from "react-dom/client";
// import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";

// 스토어 생성
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // Provider로 리액트 프로젝트에 리덕스 적용
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
