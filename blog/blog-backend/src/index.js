const Koa = require('koa');

const app = new Koa();

/**
 * app.use: 미들웨어 함수를 애플리케이션에 등록
 * Koa의 미들웨어 함수는 두 개의 파라미터를 가짐
 * @param ctx Context의 줄임말로 웹 요청과 응답에 관한 정보를 지니고 있음
 * @param next 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수
 *             next 함수를 호출하지 않으면, 그다음 미들웨어를 처리하지 않음
 */
app.use(async (ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401; // Unauthorized
    return;
  }
  // next().then(() => {
  //   console.log('END');
  // });
  await next();
  console.log('END');
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = 'hello world';
});

// 서버 포트 4000으로 열고, 서버에 접속하면 'hello world'라는 텍스트를 반환하도록 설정
app.listen(4000, () => {
  console.log('Listening to port 4000');
});
