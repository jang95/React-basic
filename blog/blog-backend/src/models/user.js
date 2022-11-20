import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  username: String,
  hashedPass: String,
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
UserSchema.method.checkpassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.static.findByUseename = function (username) {
  return this.findOne({ username });
};
const User = mongoose.model('User', UserSchema);
export default User;
