import React from 'react';
import styled from 'styled-components';

// 각 뉴스 정보를 보여 주는 컴포넌트
const NewsitemBlock = styled.div`
  display: flex;
  .thumbnail {
    img {
      display: block;
      width: 220px;
      height: 100%;
      object-fit: cover;
      margin-right: 1rem;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const newItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsitemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsitemBlock>
  );
};

export default newItem;
