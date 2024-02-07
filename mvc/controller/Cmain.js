// const Comment = require("../model/Comment");
const Model = require("../model/Comment");
const Comment = Model.commentInfo();
//model의 데이터를 require해서 가져옴 아까 그 배열이 이 안에 있어요(exports해서)
/*
Controller에서는 model에서 받은 데이터를 가공해서 view에 전달할 수 있다
*/
// GET /
exports.main = (req, res) => {
  res.render("index");
};
// GET /comments
exports.comments = (req, res) => {
  console.log(Comment);
  res.render("comments", { commentInfo: Comment });
};
// GET /comment params사용
exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; //1,2,3,4
  //undefined라면 404로 한번에 처리
  if (!Comment[commentId - 1]) res.render("404");
  res.render("comment", { commentInfo: Comment[commentId - 1] });
};

// router.get("/comment/:id", (req, res) => {
//   console.log(req.params);
//   const commentId = req.params.id; //1,2,3,4
//   //undefined라면 404로 한번에 처리
//   if (!comments[commentId - 1]) res.render("404");
//   res.render("comment", { commentInfo: comments[commentId - 1] });
// });
