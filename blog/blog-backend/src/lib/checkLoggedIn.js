/*
로그인 해야만 글쓰기, 수정, 삭제 가능
이 미들웨어를 lib에 만드는 이유는 다른 라우트에서도 사용될 가능성이 있기 때문
로그인 상태 확인 작업은 자주 일어나기 때문에 더 쉽게 재사용할 수 있도록 lib 디렉터리에 작성
*/
const checkLoggedin = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default checkLoggedin;

/*
로그인 상태가 아니라면 401 HTTP Status를 반환하고, 그렇지 않으면 그다음 미들웨어 실행
*/
