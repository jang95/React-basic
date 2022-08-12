import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewItem from './NewsItem';
import axios from 'axios';

// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트
const NewsitemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 80%) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArtivle = {
//   title: '제목',
//   describe: '내용',
//   url: 'https//google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=28789fcecf524f2e8e75b1513d6479b1`,
        );
        setArticle(response.data.articles);
        console.log('받아온 데이터', response.data);
        console.log('category', category);
        console.log('query', query);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsitemBlock>대기 중...</NewsitemBlock>;
  }
  // 아직 articles 값이 설정되지 않았을 때
  if (!article) {
    return null;
  }

  // article 값이 유효할 때
  return (
    <NewsitemBlock>
      {article.map((article) => (
        <NewItem key={article.url} article={article} />
      ))}
    </NewsitemBlock>
  );
};

export default NewsList;
