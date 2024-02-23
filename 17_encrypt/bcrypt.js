const bcrypt = require("bcrypt"); //강력한 암호화 모듈

//솔트의 라운드 수 정의(클수록 안전 but 생성시간 길어져 성능저하)
//해시함수를 몇 번 반복할 것인지에 대한 수 설정
const saltRounds = 10;

//회원가입 >> 해시값 생성
function hashPw(pw) {
  //hashSync(비밀번호, saltRound) - 암호화된 문자 return(string)
  return bcrypt.hashSync(pw, saltRounds);
}
//로그인 >> 해시값 일치 확인
function comparePw(inputPw, hashedPw) {
  //compareSync(원본비밀번호, 해시된 비밀번호)
  return bcrypt.compareSync(inputPw, hashedPw); //return true or false
}

const originalPw = "12345";
//비밀번호에 대한 해시값 생성(회원가입 시 활용)
const hashedPw = hashPw(originalPw);
console.log("암호화된 비밀번호 >> ", hashedPw);

//로그인 작업 시 활용
const isMatch1 = comparePw("12345", hashedPw); //true
const isMatch2 = comparePw("1234", hashedPw); //false

console.log("비밀번호 일치 결과 >> ", isMatch1);
console.log("비밀번호 일치 결과 >> ", isMatch2);
