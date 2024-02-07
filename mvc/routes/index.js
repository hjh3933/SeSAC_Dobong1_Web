const express = require("express");
const router = express.Router();
// const app = express();
// app대신에 router를 사용하겠습니다
const controller = require("../controller/Cmain");
// controller.main; 이렇게 exports한 함수에 접근가능

// (req, res) => {
//     res.render("index");
//   } -> 이건 컨트롤러의 역할입니다 컨트롤러에서 함수를 만들어서 가져다 쓰겠습니다

//라우팅
// get메소드에 변수로 넣을 때는 ()를 안쓰네요
router.get("/", controller.main);

router.get("/comments", controller.comments);

router.get("/comment/:id", controller.comment);

//라우터를 한번에 내보내기 (이래야 사용가능)
module.exports = router;
