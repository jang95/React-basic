import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
// import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  // v6에서는 match 대신에 useParams를 사용
  const param = useParams();
  // const searchParams = useSearchParams();
  // const location = useLocation();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const categoryObject = param.category || 'all';
  // console.log('NewsPage: searchParams', searchParams);
  // console.log('NewsPage: location', location);

  return (
    <>
      <Categories />
      <NewsList categoryObject={categoryObject} />
    </>
  );
};
export default NewsPage;
