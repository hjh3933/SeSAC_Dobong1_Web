const bcrypt = require("bcrypt");
const saltRounds = 10;
const model = require("../models");

exports.main = (req, res) => {
  res.render("index");
};
exports.getJoin = (req, res) => {
  res.render("join");
};
exports.getLogin = (req, res) => {
  res.render("login");
};

//암호화 함수 작성
function encrypt(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}
//해시값 확인 함수 작성
function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw);
}

//post
exports.postJoin = (req, res) => {
  //seque사용, bcrypt사용하여 암호화하여 create
  console.log("body데이터 >> ", req.body); //{userid, pw, name}
  const { userid, pw, name } = req.body;

  //암호화
  const hashedPw = encrypt(pw);
  //create하여 데이터 넣기
  model.User.create({
    userid: userid,
    pw: hashedPw,
    name: name,
  }).then((result) => {
    console.log("create결과>>", result);
    res.send(result);
  });
};

exports.postLogin = (req, res) => {
  console.log("login정보 >> ", req.body); //{userid, pw}
  const { userid, pw } = req.body;

  //pw검증
  model.User.findOne({
    where: { userid: userid },
  }).then((result) => {
    if (result) {
      console.log(result.pw);
      const hashedPw = result.pw;
      const compareVal = comparePw(pw, hashedPw);
      console.log("암호비교결과>>", compareVal);
      if (compareVal) {
        //session생성
        req.session.user = result.id;
        console.log(req.session);
        res.send({ result: true, id: result.id });
      } else {
        res.send(false);
      }
    } else {
      res.send(false);
    }
  });
};

exports.getProfile = (req, res) => {
  console.log(req.query);
  model.User.findOne({ where: { id: req.query.id } }).then((result) => {
    res.render("profile", { data: result, pw: req.query.pw });
  });
};

exports.postUpdate = (req, res) => {
  //pw암호화
  const { id, userid, pw, name } = req.body;

  //암호화
  const hashedPw = encrypt(pw);
  //update문
  model.User.update(
    {
      userid,
      pw: hashedPw,
      name,
    },
    {
      where: { id: id },
    }
  ).then((result) => {
    console.log("update결과 >> ", result);
    if (result[0]) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.postDelete = (req, res) => {
  //세션삭제(여기부터 다시)
  const user = req.session.user;

  if (user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("server err");
        throw err;
      }
    });
    //데이터 삭제
    model.User.destroy({
      where: { id: req.body.id },
    }).then((response) => {
      //세션 삭제되었는지 확인
      // res.send("삭제완료");
      res.send("삭제완료");
    });
  }
};

exports.getLogout = (req, res) => {
  //세션 삭제
  const user = req.session.user;
  if (user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("server err");
        throw err;
      }
    });
    res.send("로그아웃하였습니다");
  } else {
    res.send("세션이 만료되었습니다");
  }
};
