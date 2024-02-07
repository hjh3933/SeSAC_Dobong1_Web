exports.main = (req, res) => {
  res.render("index");
};
//입력값, model값 비교하여 boolean값 보내보기
const model = require("../model/User");
const userInfo = model.userInfo();
let result;
//id, pw값을 가짐
exports.login = (req, res) => {
  console.log(req.body);
  console.log(userInfo);

  if (req.body.id == userInfo.id && req.body.pw == userInfo.pw) {
    result = true;
  } else {
    result = false;
  }
  res.send({
    result: result,
    userInfo: userInfo,
  });
};
