// 모듈을 불러서 사용
//require문장은 맨위에 적는게 좋다
//가지고 오고 싶은 함수/변수만 구조 분해 할당을 이용해서 가져올 수 있음(객체로 내보냈기 때문에)
const {sayName} = require('./03_exports1');  //확장자.js는 써도되고 안써도 된다
const export1 = require('./03_exports1');
// sayName('allie');
console.log(export1);
//colors와 sayName을 객체로 가져와서 보여준다
export1.sayName('allie') //이 형태로 사용가능

const {sayHi2, sayHi3} = require('./03_exports2');
sayHi2();
sayHi3('안녕하세요');