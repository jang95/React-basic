import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// document.cookie = 'safeCookie1=foo; SameSite=Lax';
// document.cookie = 'safeCookie2=foo';
// document.cookie = 'crossCookie=bar; SameSite=None; Secure';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('window.location.href', window.location.href);

if (window.location.href === 'http://localhost:3000/') {
  window.location.assign('http://localhost:3000/all');
}
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>,

  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
