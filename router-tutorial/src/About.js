import React from "react";
// import qs from "qs";
// import { useLocation, useSearchParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const About = () => {
  // const query = qs.parse(useLocation().search, {
  //   ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략
  // });
  // const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열 입니다.
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("detail") === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로그램입니다.</p>
      {/* {showDetail && <p>detail 값을 true로 설정하셨군요!</p>} */}
      {detail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
