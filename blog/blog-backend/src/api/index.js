import Router from 'koa-router';
import posts from './posts';
import auth from './auth/index';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
// api.get('/test', (ctx) => {
//   ctx.body = 'test 성공';
// });

// 라우터를 내보냅니다.
export default api;
