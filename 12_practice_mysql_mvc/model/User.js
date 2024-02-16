// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost", //host주소
  user: "sesac", //유저이름
  password: "1234", //내가 설정한 비밀번호
  database: "sesac", //내가 사용할 db이름
});
/*
1. 뷰에서 요청
2. 컨트롤러에서 정보를 받고 모델로 줌(req.body, req.query, req.params...)
3. 모델에서 DB로 요청
4. 데이터 삽입, 삭제, 조회.. 결과값을 컨트롤러로 응답
5. 컨트롤러에서는 res객체를 통해 뷰로 응답
뷰>컨트롤러>모델>DB>모델>컨트롤러>뷰
*/

// TODO: 모델 코드
// POST /user/signup
// 회원정보 등록
exports.post_signup = (data, cb) => {
  console.log("model", data);
  const sql = `INSERT INTO user(userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    // 데이터 없어도 cb실행은 꼭!
    cb();
  });
};
// POST /user/signin
// 특정 회원정보 조회
exports.post_signin = (data, cb) => {
  console.log("model", data);
  const sql = `SELECT * FROM user WHERE userid = '${data.userid}' and pw = '${data.pw}' LIMIT 1`;
  //limit건이유: 회원가입시 중복체크를 하지 않아서 동일한 데이터 있을 수 있음
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("model", rows); //id, userid, name, pw
    cb(rows);
  });
};
exports.post_profile = (id, cb) => {
  console.log("model userid", id);
  const sql = `SELECT * FROM user WHERE userid = '${id}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("Model", rows);
    cb(rows[0]);
  });
};
exports.edit_profile = (data, cb) => {
  console.log(data);
  // id, pw, name
  const sql = `UPDATE user SET pw = '${data.pw}', name = '${data.name}' WHERE id = ${data.id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    cb();
  });
};
exports.delete_profile = (id, cb) => {
  console.log("model", id);
  const sql = `DELETE FROM user WHERE id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    cb();
  });
};
