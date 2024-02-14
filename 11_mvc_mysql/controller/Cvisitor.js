const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};
exports.getVisitors = (req, res) => {
  //DB연결 전
  // console.log(prac); //배열형태
  // res.render("visitor", { data: Visitor.getVisitors() }); //보낼때는 객체 형태로!

  //DB연결 후
  Visitor.getVisitors((result) => {
    // getVisitor는 cb함수를 매개변수로 받기 때문에
    // cb(row) => result변수를 받는 callback함수를 작성했다고 생각하면된다
    // 고로 row = result 동일한 정보가 전달된다(console창으로 확인가능)
    // 데이터를 받은 뒤의 동장 -> callback에 적는다
    console.log("Cvisitor.js 전체목록::", result);
    res.render("visitors", { data: result });
  });
};
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  Visitor.getVisitor(req.params.id, (result) => {
    console.log("Cvisitor.js 데이터 하나 조회", result);
    res.send(result);
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body); //{name, comment}
  Visitor.postVisitor(req.body, (result) => {
    // 이 밑의 실행문은 모델의 postVisitor()가 실행된 "이후" 실행됨!!!!!!
    console.log("Cvisitor.js post", result);
    // model에서 id만 넘기고 있음 result로
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};
//req.body => data로 넘겨짐, (result) cb로 넘겨짐

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js delete", result);
    res.send("몇 번 방명록 삭제 완료!");
  });
};

exports.patchVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment} id는 where조건 name, comment는 변경사항
  Visitor.patchVisitor(req.body, (result) => {
    console.log("Cvisitor.js patch", result);
    res.send("수정완료");
  });
};
