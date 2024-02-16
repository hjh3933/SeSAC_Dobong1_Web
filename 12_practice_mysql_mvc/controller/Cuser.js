// TODO: 컨트롤러 코드
const User = require("../model/User");
// GET /user
exports.main = (req, res) => {
  res.render("index");
};
// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};
// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
// 회원가입
exports.post_signup = (req, res) => {
  console.log("controller", req.body); //userid, pw, name
  User.post_signup(req.body, () => {
    res.end();
  });
};
// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  console.log("controller", req.body); //userid, pw
  User.post_signin(req.body, (result) => {
    console.log("controller", result);
    //로그인 성공시 true
    //로그인 실패시 false
    // result.length > 0 배열요소가 있다(성공)
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  console.log("req.body", req.body);
  //{userid: value}
  User.post_profile(req.body.userid, (result) => {
    console.log(result); //0번만 보내서 배열이 아니라 객체한개가 온다
    // {id, userid, name, pw}
    res.render("profile", { data: result });
  });
};
exports.edit_profile = (req, res) => {
  console.log(req.body);
  User.edit_profile(req.body, () => {
    res.end();
  });
};
exports.delete_profile = (req, res) => {
  console.log(req.body);
  User.delete_profile(req.body.id, () => {
    res.end();
  });
};
