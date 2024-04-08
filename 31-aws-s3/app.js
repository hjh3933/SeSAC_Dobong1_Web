const express = require("express");
const app = express();
const multer = require("multer");
const aws = require("aws-sdk");
const dotenv = require("dotenv");
const multerS3 = require("multer-s3");
dotenv.config();
const PORT = process.env.PORT;

//미들웨어 설정
app.set("view engine", "ejs");

//aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();
//s3 관련 multer설정
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", //파일 접근 권한
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

// GET / index.ejs render
app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});
// POST /upload
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  //   {
  //     fieldname: 'image',
  //     originalname: 'êµ¬ë¦\x84.jpg',
  //     encoding: '7bit',
  //     mimetype: 'image/jpeg',
  //     size: 5423,
  //     bucket: 'bucket-juhee',
  //     key: '1712555843311-êµ¬ë¦\x84.jpg',
  //     acl: 'public-read',
  //     contentType: 'application/octet-stream',
  //     contentDisposition: null,
  //     contentEncoding: null,
  //     storageClass: 'STANDARD',
  //     serverSideEncryption: null,
  //     metadata: null,
  //     location: 'https://bucket-juhee.s3.ap-northeast-2.amazonaws.com/1712555843311-%C3%AA%C2%B5%C2%AC%C3%AB%C2%A6%C2%84.jpg',
  //     etag: '"d210b34c80ec53e1746a7f07d7d7179d"',
  //     versionId: undefined
  //   }
  //   res.send("이미지 업로드 중...");
  res.render("index", { imageUrl: req.file.location });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
