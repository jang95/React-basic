import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import Loginpage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

// PostListPage의 path에 배열을 넣어주면 한 라우트에서 컴포넌트에 여러 개의 경로를 쉽게 설정할 수 있음
const App = () => {
  return (
    <Routes>
      {/* <Route element={PostListPage} path={['@/:username', '/']} /> */}
      <Route element={<PostListPage />} path="/@:username" />
      <Route element={<PostListPage />} path="/" />
      <Route element={<Loginpage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<WritePage />} path="write" />
      <Route element={<PostPage />} path="/@:username/:postId" />
    </Routes>
  );
};

export default App;
