import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
// import PostViewer from '../components/post/PostViewer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      {/* <PostViewer /> */}
      <div>반갑습니다</div>
    </>
  );
};

export default PostPage;
