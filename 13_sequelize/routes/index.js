const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");
const Cuser = require("../controller/Cuser");

router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);
router.get("/visitor/:id", controller.getVisitor);
//등록,삭제,수정
router.post("/visitor", controller.postVisitor);
router.patch("/visitor", controller.patchVisitor);
router.delete("/visitor", controller.deleteVisitor);

//회원관련 페이지
// GET /user
router.get("/user", Cuser.main);
// GET /user/signin
router.get("/user/signin", Cuser.get_signin);
// GET /user/signup
router.get("/user/signup", Cuser.get_signup);

// POST /user/signup;
router.post("/user/signup", Cuser.post_signup);
// POST /user/signin;
router.post("/user/signin", Cuser.post_signin);
// POST /user/profile;
router.post("/user/profile", Cuser.post_profile);
// POST /user/profile/edit
router.post("/user/profile/edit", Cuser.edit_profile);
// POST /user/profile/delete
router.post("/user/profile/delete", Cuser.delete_profile);

module.exports = router;
