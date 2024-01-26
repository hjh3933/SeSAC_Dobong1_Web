//callback -> promise로 변경하기 실습
// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb("callback hell");
//   }, 1000);
// }
//1. callback
//call -> back -> hell 순서로 실행
// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는 " + message);
//     });
//   });
// });

//2. promise
function call2(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back2() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell2() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}
//promise 호출
call2("kim")
  .then((name) => {
    console.log(name + "반가워");
    return back2();
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell2();
  })
  .then((msg) => {
    console.log("여기는 " + msg);
  });

//3. async로 해보기
async function execute(name, txt, msg) {
  await call2(name);
  console.log(name + "반가워");
  await back2();
  console.log(txt + "을 실행했구나");
  await hell2();
  console.log("여기는 " + msg);
}
// execute("kim", "back", "callback hell");
