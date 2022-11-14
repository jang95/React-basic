import mongoose from 'mongoose';

// 스키마를 만들 때는 mongoose 모듈의 Schema를 사용하여 정의
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedData: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 설정
  },
});

// 모델을 만들 때는 mongoose.model 함수 사용
const Post = mongoose.model('Post', PostSchema);
export default Post;
