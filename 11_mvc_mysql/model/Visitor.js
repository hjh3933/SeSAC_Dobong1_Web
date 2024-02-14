//db연결전
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "allie", comment: "안녕하세요" },
//     { id: 2, name: "juhee", comment: "hi" },
//     { id: 3, name: "chalie", comment: "반가워요" },
//     { id: 4, name: "json", comment: "오늘 점심 뭐 먹지?" },
//   ];
// };

//db연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost", //host주소
  user: "sesac", //유저이름
  password: "1234", //내가 설정한 비밀번호
  database: "sesac", //내가 사용할 db이름
});

//전체데이터 조회
// GET /visitor
exports.getVisitors = (cb) => {
  // conn.query('sql문', (err,rows를 매개변수로 받는 콜백함수)=>{
  // })
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;
    console.log("visitors.js 전체목록::", rows);
    cb(rows); //callback으로 인자 전달
  });
};
exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) throw err;
    console.log("visitor.js 데이터 하나 조회", rows); //[{}]
    //하나의 데이터를 찾아도 배열형태로 넘어옴
    cb(rows[0]); //callback으로 인자 전달
  });
};

//데이터 등록 insert
exports.postVisitor = (data, cb) => {
  conn.query(
    // data = {name: 진형, comment: "발렌타인데이다!"} req.body의 데이터형태
    // cb => (result)
    // 문자열 처리 주의
    `INSERT INTO visitor VALUES (NULL, '${data.name}', '${data.comment}')`,
    (err, rows) => {
      if (err) throw err;
      console.log(rows); //여기의 rows는 뭘까요?
      //   OkPacket {
      //     fieldCount: 0,
      //     affectedRows: 1,
      //     insertId: 6,
      //     serverStatus: 2,
      //     warningCount: 0,
      //     message: '',
      //     protocol41: true,
      //     changedRows: 0
      //   }

      //query메소드로 받은 데이터 rows를 콜백함수를 이용해 넘긴다
      cb(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js delete", rows);
    cb(rows);
  });
};

exports.patchVisitor = (data, cb) => {
  console.log(data); //{id, name, comment}
  conn.query(
    `UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`,
    (err, rows) => {
      if (err) throw err;

      console.log(rows);
      cb(true);
    }
  );
};
