import Post from '../../models/post';

export const write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save(); // 데이터베이스에 저장, 저장 요청 완료할 때까지 대기
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = (ctx) => {};

export const read = (ctx) => {};

export const remove = (ctx) => {};

export const update = (ctx) => {};
