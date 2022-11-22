import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

/**
 * @param {*} password 비밀번호
 * 비밀번호를 파라미터로 받아서 계정의 hashedPassword 값을 설정
 */
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

// 파라미터로 받은 비밀번호가 해당 계정의 비밀번호와 일치하는지 검증
UserSchema.methods.checkpassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

// 응답할 데이터에서 hashedPassword 필드 제거
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

const User = mongoose.model('User', UserSchema);
export default User;
