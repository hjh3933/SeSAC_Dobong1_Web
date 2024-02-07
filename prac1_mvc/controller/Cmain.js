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
    userInfo: req.body,
  });
};

//model에서 user값을 받아오기
const Users = model.user;
const userSplit = Users.split("\n");
//엔터를 기준으로 3가지 (아이디 비밀번호 이름)을 가진 배열로 반환되었을 것
//for문으로 3번을 비교하는 방식?
userSplit[0];
userSplit[1];
userSplit[2];
exports.login2 = (req, res) => {
  console.log(userSplit);
  console.log(req.body);
  let name;
  for (i = 0; i < userSplit.length; i++) {
    let user = userSplit[i].split("//");
    // [0] id, [1] pw, [2] name
    if (user[0] == req.body.id && user[1] == req.body.pw) {
      result = true;
      name = user[2];
      break;
    } else {
      result = false;
    }
  }
  res.send({
    result: result,
    name: name,
  });
};
