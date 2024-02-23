const crypto = require("crypto"); //node.js 내장모듈, 설치X
/*
1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
- createHash(알고리즘)
- pbkdf2sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

//1-1)createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
//인코딩으로는 base64, hex, ascii, binary등을 쓸 수 있음

//비밀번호를 받아서 암호화 시켜주는 함수
const createHashPw = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log("1st hasing", createHashPw("1234"));
console.log("2nd hasing", createHashPw("1234"));
console.log("3rd hasing", createHashPw("1234")); //전부다 똑같은 값
console.log("another val", createHashPw("1234.")); // 다른값 나온다

//1-2) pdkdf2Sync(암호화할값, 솔트, 반복횟수, 키길이, 알고리즘).toString(인코딩방식)
/*
- 솔트를 이용해서 해싱하는 함수
- salt생성: crypto.randomBytes(바이트수)
- randomBytes와 pdkdf2Sync함수는 버퍼 형식의 데이터를 리턴(toString필요)
*/

// const str = "hello!";
// const buffer = Buffer.from(str); //버퍼가 16진수로 표현
// console.log(buffer);
// 회원가입 과정
// 새로운 hash와 salt를 만드는 과정 >> db에 hash와 salt를 저장해야함
function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100; //반복횟수
  const keylen = 64; //생성할 키의 길이
  const algorithm = "sha512";

  //pdkdf2Sync(암호화할값, 솔트, 반복횟수, 키길이, 알고리즘)
  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //buffer
    .toString("base64"); //buffer to String

  return { hash, salt }; //{ hash: hash, salt: salt }
}

console.log("1st hashing", saltAndHashPw("1234"));
console.log("2nd hashing", saltAndHashPw("1234"));
console.log("3rd hashing", saltAndHashPw("1234"));
//모두 다른 salt값 생성했기 때문에 모두 다른 hash값이 나온다

//로그인과정
//DB에 있는 hash와 salt이용해서
//input password의 hash값 검증
function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100; //saltAndPw랑 같아야 함
  const keylen = 64; //saltAndPw랑 같아야 함
  const algorithm = "sha512"; //saltAndPw랑 같아야 함

  //inputPw를 해시 시켜주는 작업
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");
  console.log("input hash >> ", hash);
  return savedHash === hash; //비밀번호가 같으면 true를 return한다는 뜻
}

console.log("================================================================");
const registerPw = "qwer1234";

//회원가입 DB에 저장
const { salt: registerSalt, hash: registerHash } = saltAndHashPw(registerPw);
console.log("암호화에 쓰인 Salt >> ", registerSalt);
console.log("암호화 된 Hash >> ", registerHash);

//로그인 >> 비밀번호가 DB의 hash값과 일치하는지 확인
const isMatch1 = checkPw("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPw("qwer12345", registerSalt, registerHash);

console.log("비밀번호 일치 검사 >> ", isMatch1);
console.log("비밀번호 일치 검사 >> ", isMatch2);

/*2. 양방향 암호화: 복호화 가능 */
//createCipheriv() iv = initialize vector의 줄임말
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //양방향에서 salt같은 역할을 한다

const algorithm = "aes-256-cbc";

const originalMessage = "hello, world!";
console.log(
  "====================양방향 암호화================================"
);
//암호화
function encrypt(text) {
  //1. 암호화 객체 생성
  // const cipher = crypto.createCipheriv(알고리즘, 키, iv); 문자열, 버퍼, 버퍼
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  //2. 실제 데이터 암호화 작업
  // let encrypted = cipher.update(암호화할 데이터, 입력인코딩, 출력인코딩);
  let encrypted = cipher.update(text, "utf8", "base64"); //암호화된 문자열 저장

  //3. final을 이용해서 최종결과 생성
  encrypted += cipher.final("base64"); //최종결과 생성필수, 출력인코딩과 맞춰줘야함
  return encrypted;
}
// console.log(encrypt(originalMessage));

//복호화
function decrypt(encryptedText) {
  //1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv); //암호화와 완전히 동일해야 한다

  //2. 실제 데이터 복호화 작업
  let decrypted = decipher.update(encryptedText, "base64", "utf8"); //입력인코딩과 출력인코딩이 반대로 변경된다

  //3. final을 이용해서 최종결과 생성
  decrypted += decipher.final("utf8");

  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log("양방향 암호화 됨 >> ", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("양방향 복호화 됨 >> ", decryptedMessage);
