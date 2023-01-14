import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
// import PostViewer from '../components/post/PostViewer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      {/* <PostViewer /> */}
    </>
  );
};

export default PostPage;
