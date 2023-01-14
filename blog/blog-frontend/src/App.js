import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

// PostListPage의 path에 배열을 넣어주면 한 라우트에서 컴포넌트에 여러 개의 경로를 쉽게 설정할 수 있음
const App = () => {
  // return (
  //   <Routes>
  //     {/* <Route element={PostListPage} path={['@/:username', '/']} /> */}
  //     <Route element={<PostListPage />} path="/@:username" />
  //     <Route element={<PostListPage />} path="/" />
  //     <Route element={<LoginPage />} path="/login" />
  //     <Route element={<RegisterPage />} path="/register" />
  //     {/* <Route element={<WritePage />} path="/write" /> */}
  //     <Route path="/write" element={<WritePage />} />
  //     {/* <Route element={<PostPage />} path="/@:username/:postId" /> */}
  //     <Route element={<PostPage />} path="/@:username/:postId" />
  //   </Routes>
  // );
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
