// TODO: 컨트롤러 코드
// const models = require("../models/index"); index만 불러도된다, 근데 어차피 index는 생략가능이라 똑같음
const models = require("../models");

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
  // const sql = `INSERT INTO user(userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 결과", result);
    // result =>
    // User {
    //   dataValues: { id: 11, userid: 'abcd', name: '알파벳맨', pw: '1234' },
    //   _previousDataValues: { userid: 'abcd', name: '알파벳맨', pw: '1234', id: 11 },
    //   uniqno: 1,
    //   _changed: Set(0) {},
    //   _options: {
    //     isNewRecord: true,
    //     _schema: null,
    //     _schemaDelimiter: '',
    //     attributes: undefined,
    //     include: undefined,
    //     raw: undefined,
    //     silent: undefined
    //   },
    //   isNewRecord: false
    // }
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
    // findOne을 이용해서 찾은 결과 반환
    // 데이터를 못찾으면 null반환
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  // console.log("req.body", req.body);

  // const sql = `SELECT * FROM user WHERE userid = '${id}' LIMIT 1`;
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("login결과>>", result);
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
    // result = 성공시 [1], 실패시 [0] 반환
    res.end();
  });
};
exports.delete_profile = (req, res) => {
  console.log(req.body);

  // const sql = `DELETE FROM user WHERE id = ${id}`;
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    // result = 성공시 [1], 실패시 [0] 반환
    res.end();
  });
};
