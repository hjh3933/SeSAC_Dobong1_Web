const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);
router.get("/visitor/:id", controller.getVisitor);
//등록,삭제,수정
router.post("/visitor", controller.postVisitor);
router.patch("/visitor", controller.patchVisitor);
router.delete("/visitor", controller.deleteVisitor);

module.exports = router;
