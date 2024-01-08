/* function
    -어떤 작업을 수행하기 위해 "독립적으로" 설계된 코드의 집합
    -함수를 정의(선언)하고 호출(사용)
    -선언방식 3가지
        -함수 선언문
            -선언 후 어디에서나 사용가능
        -함수 표현식
            -선언 이후에만 사용가능
        -화살표 함수
            -화살표 함수와 함수표현식은 변수에 익명함수를 담아둔 모양
            -화살표 함수와 함수표현식은 동일함(모양만 다름)
*/
//함수 선언문
//call
helloWorld1();

function helloWorld1() {
    console.log('helloWorld1')
}

//함수 표현식
// helloWorld2(); 안나옴
const helloWorld2 = function() {
    console.log('helloWorld2')
}
helloWorld2();

//화살표 함수
// helloWorld3(); 안나옴
const helloWorld3 = ()=>{
    console.log('helloWorld3')
}
helloWorld3();

//인자전달(parameter)
function add(num1, num2) {
    console.log(num1+num2)
}
add(1, 2);  //출력하고 땡
console.log(add(1, 1))  // 2출력하고 undefined


/*return
    -반환 값으로 함수 내부 코드의 '최종 결과값'을 가지고 있는 것
    -console.log 등으로 출력하는데 그치지않고 값을 저장하고 보관하기 위한 키워드
    -return을 만나면 함수 실행 중단
*/
const add1 = function(num1, num2) {
    console.log('리턴전에는 잘 실행되요')
    return num1 + num2
    //결과값 저장
    console.log('리턴 이후에는 실행되지 않아요')
}
add1(1, 2); //저장 중..
console.log(add1(1, 2))
const result1 = add1(3, 5)
const result2 = add(3, 2)
console.log(result1)    //8
console.log(result2)    //undefined 값이 저장되어있지 않기 때문에

console.log('----------------------')
const sayHellow = function(text) {
    return text
}
console.log(sayHellow('allie'))

function sayHellow2(text, name) {
    return `${text} ${name}`
}
console.log(sayHellow2('hi','allie'))

//함수 표현식(sayHello3), 화살표함수(sayHello4)
const sayHello3 = function(text, name) {
    return `${text} ${name}`
}
console.log(sayHello3('hi','juhee'))
const sayHello4 = (text, name) => {
    return `${text} ${name}`
}
console.log(sayHello4('hi','judy'))

console.log('==================')
function multifly(num1, num2) {
    return num1 * num2
}
console.log(multifly(3, 7))
console.log(multifly(2, 2))

const square = function(num1) {
    console.log(num1*num1);
}
square(4)
square(11)
square(5)
