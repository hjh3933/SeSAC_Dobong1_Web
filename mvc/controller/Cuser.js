const User = require("../model/User");
const userInfo = User.userInfo();

//GET /user
exports.user = (req, res) => {
  console.log(userInfo);
  res.render("user", { userInfo: userInfo });
};
