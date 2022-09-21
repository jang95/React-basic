// import React, { Component } from "react";
// import React, { Suspense, useState } from "react";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import notify from "./notify";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});
// const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    // notify();
    // import("./notify").then((result) => result.default());
    setVisible(true);
  };
  // 컴포넌트 미리 불러오는(preload) 방법
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {/* <Suspense fallback={<div>loading...</div>}> */}
        {visible && <SplitMe />}
        {/* </Suspense> */}
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

// class App extends Component {
//   state = {
//     SplitMe: null,
//   };
//   handleClick = async () => {
//     const loadedModule = await import("./SplitMe");
//     this.setState({
//       SplitMe: loadedModule.default,
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
