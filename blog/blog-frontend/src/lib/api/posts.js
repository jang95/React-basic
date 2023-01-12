import client from './client';

// post관련된 API를 요청하는 함수

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', {
    title,
    body,
    tags,
  });

export const readPost = (id) => client.get(`/api/posts/${id}`);
