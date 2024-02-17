// TODO: 컨트롤러 코드
const User = require("../models/User");
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

const models = require("../models");
// POST /user/signup
// 회원가입
exports.post_signup = (req, res) => {
  // const sql = `INSERT INTO user(userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 결과", result);
    res.send(result);
  });
};
// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  console.log("controller", req.body); //userid, pw

  // const sql = `SELECT * FROM user WHERE userid = '${data.userid}' and pw = '${data.pw}' LIMIT 1`;
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log("로그인 sequ결과!", result);
    res.send(result);
  });
};

exports.post_profile = (req, res) => {
  console.log("req.body", req.body);

  // const sql = `SELECT * FROM user WHERE userid = '${id}' LIMIT 1`;
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log(result);
    res.render("profile", { data: result });
  });
};
exports.edit_profile = (req, res) => {
  console.log(req.body);

  // const sql = `UPDATE user SET pw = '${data.pw}', name = '${data.name}' WHERE id = ${data.id}`;
  models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.end();
  });
};
exports.delete_profile = (req, res) => {
  console.log(req.body);

  // const sql = `DELETE FROM user WHERE id = ${id}`;
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    res.end();
  });
};
