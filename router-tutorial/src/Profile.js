import React from "react";
import { useParams } from "react-router-dom";
import WithRouter from "./WithRouter";
/**
 * eact-router-dom 버전 6부터는 element로 컴포넌트를 만들고,
 * route props(match, history, location)을 받지 않는다.
 * 따라서, useParams, useLocation, useHistory를 사용하여 route context에 접근
 *
 * => 리액트 라우터 v6에서는 기존의 useHistory 대신 useNavigate를 사용
 */

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = () => {
  console.log("profile");
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouter />
    </div>
  );
};

export default Profile;
