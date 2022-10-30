const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
// router.get('/', (ctx) => {
//   ctx.body = '홈';
// });
router.use('/api', api.routes()); // api 라우트 적용

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

// router.get('/about:name?', (ctx) => {
//   const { name } = ctx.params;
//   // name의 존재 유무에 따라 다른 결과 출력
//   ctx.body = name ? `${name}의 소개` : '소개';
// });

// router.get('/:posts?', (ctx) => {
//   const { id } = ctx.query;
//   // name의 존재 유무에 따라 다른 결과 출력
//   ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// });

// // app 인스턴스에 라우터 적용
// app.use(router.routes()).use(router.allowedMethods());

/**
 * app.use: 미들웨어 함수를 애플리케이션에 등록
 * Koa의 미들웨어 함수는 두 개의 파라미터를 가짐
 * @param ctx Context의 줄임말로 웹 요청과 응답에 관한 정보를 지니고 있음
 * @param next 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수
 *             next 함수를 호출하지 않으면, 그다음 미들웨어를 처리하지 않음
 */
//

// 서버 포트 4000으로 열고, 서버에 접속하면 'hello world'라는 텍스트를 반환하도록 설정
// app.listen(4000, () => {
//   console.log('Listening to port 4000');
// });
