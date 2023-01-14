import React from 'react';
import styled from 'styled-components';
import getTag from '../../../node_modules/lodash/_getTag';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
// import SubInfo from '../common/SubInfo';
// import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;
  // const { title, body } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{user.username}</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          {tags.map((tag) => (
            <div className="tag">#{getTag}</div>
          ))}
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
  // return (
  //   <PostViewerBlock>
  //     <PostHead>
  //       {/* <h1>{title}</h1> */}
  //       <h1>제목</h1>
  //       <SubInfo>
  //         <span>
  //           <b>tester</b>
  //         </span>
  //         <span>{new Date().toLocaleDateString()}</span>
  //       </SubInfo>
  //       <Tags>
  //         <div className="tag">#태그1</div>
  //         <div className="tag">#태그2</div>
  //         <div className="tag">#태그3</div>
  //       </Tags>
  //       {/* <SubInfo
  //         username={user.username}
  //         publishedDate={publishedDate}
  //         hasMarginTop
  //       /> */}
  //       {/* <Tags tags={tags} /> */}
  //     </PostHead>
  //     {/* <PostContent dangerouslySetInnerHTML={{ __html: body }} /> */}
  //     <PostContent
  //       dangerouslySetInnerHTML={{ __html: '<p>HTML <b>내용</b>입니다 </p>' }}
  //     />
  //   </PostViewerBlock>
  // );
};

export default PostViewer;
