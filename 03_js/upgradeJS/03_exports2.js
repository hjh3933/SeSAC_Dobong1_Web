/*
    모듈 만들기: (common js방식)
    exports라는 키워드 사용해서 내보내기
    따로따로 내보내기
*/
//함수 선언문같은 경우 따로 exports할 수 없어서 함수 표현식이나 화살표 함수의 형태로 exports 해야한다
exports.sayHi2 = () => {
    console.log('hi2');
}
exports.sayHi3 = function(name) {
    console.log(name)
}
