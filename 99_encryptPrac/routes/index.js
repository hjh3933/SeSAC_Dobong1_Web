const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

//get
router.get("/", controller.main);
router.get("/getJoin", controller.getJoin);
router.get("/getLogin", controller.getLogin);
router.get("/getProfile", controller.getProfile);

//post
router.post("/postJoin", controller.postJoin);
router.post("/postLogin", controller.postLogin);
router.post("/postUpdate", controller.postUpdate);
router.post("/postDelete", controller.postDelete);
router.get("/getLogout", controller.getLogout);

module.exports = router;
