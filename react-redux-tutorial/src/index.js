import React from 'react';
// ReactDOM은 최신 버전에서 사용하지 않음
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './modules';
// import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, composeWithDevTools());

const root = createRoot(document.getElementById('root'));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
