/*
    모듈 만들기: (common js방식)
    exports라는 키워드 사용해서 내보내기
    한번에 내보내기
*/
const colors = ['#fff', '#ddd', 'red'];

const sayHi = ()=>{
    console.log('hi')
}
function sayName(name) {
    console.log('my name is', name);
    sayHi();
}

//객체 형태로 내보낸다
module.exports = {
    colors,
    sayName
}