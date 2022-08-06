import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  /**
   * Route 사용할 때 Routes로 감싸준다
   * component 대신에 element, component식으로 대입
   */
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/info" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
