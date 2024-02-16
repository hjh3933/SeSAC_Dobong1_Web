// const Visitor = require("../model/Visitor");
const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};
exports.getVisitors = (req, res) => {
  //1. DB연결 전
  // console.log(prac); //배열형태
  // res.render("visitor", { data: Visitor.getVisitors() }); //보낼때는 객체 형태로!

  //2. DB연결 후
  // Visitor.getVisitors((result) => {
  //   // getVisitor는 cb함수를 매개변수로 받기 때문에
  //   // cb(row) => result변수를 받는 callback함수를 작성했다고 생각하면된다
  //   // 고로 row = result 동일한 정보가 전달된다(console창으로 확인가능)
  //   // 데이터를 받은 뒤의 동장 -> callback에 적는다
  //   console.log("Cvisitor.js 전체목록::", result);
  //   res.render("visitors", { data: result });
  // });

  //3. sequelize연결
  models.Visitor.findAll().then((result) => {
    console.log("find all >>", result); //[{행1}{행2}{행3}]
    res.render("visitors", { data: result });
  });
};
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  //***before sequelize
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("Cvisitor.js 데이터 하나 조회", result);
  //   res.send(result);
  // });

  //***after sequelize
  // `SELECT * FROM visitor WHERE id = ${id}`
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result); //{}
    res.send(result);
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body); //{name, comment}

  //***before sequelize
  // Visitor.postVisitor(req.body, (result) => {
  //   // 이 밑의 실행문은 모델의 postVisitor()가 실행된 "이후" 실행됨!!!!!!
  //   console.log("Cvisitor.js post", result);
  //   // model에서 id만 넘기고 있음 result로
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });

  //***after sequelize
  // `INSERT INTO visitor VALUES (NULL, '${data.name}', '${data.comment}')`
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log("등록 result", result);
    res.send(result);
  });
};
//req.body => data로 넘겨짐, (result) cb로 넘겨짐

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("Cvisitor.js delete", result);
  //   res.send("몇 번 방명록 삭제 완료!");
  // });

  // `DELETE FROM visitor WHERE id = ${id}`
  //***after sequelize
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("sequelize destroy의 result", result); //1(성공, true) or 0(실패, false)
    res.send(req.body.id + " 번 방명록 삭제 완료!");
  });
};

exports.patchVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment} id는 where조건 name, comment는 변경사항
  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js patch", result);
  //   res.send("수정완료");
  // });

  // `UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`
  // ***after sequelize
  //update({바꿀내용}{where조건})
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.send("수정완료");
  });
};
