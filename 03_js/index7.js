/* 문자열에서 사용가능한 속성/메소드()
- length
- toUpperCase, toLowerCase, trim, indexOf
  slice, replace, replaceAll, repeat, split
 */
let str1 = 'Strawberry Moon';
let str2 = '    Strawberry Moon  ';

//문자열 인덱싱
console.log(str1[5])
console.log(str1[5]+str1[5]+str1[8])

console.log('str1의 문자열길이', str1.length)
console.log('str2의 문자열길이', str2.length)

let msg = 'Happy Birthday~';
let userId = '   user123   ';

console.log(msg.toLowerCase())
console.log(msg.toUpperCase())
console.log(str2.trim().length)
console.log(userId.trim())
//indexOf
let mango = 'applemango';
console.log(mango.indexOf('apple')) //a index
console.log(mango.indexOf('mango')) //m index number
console.log(mango.indexOf('e'))
console.log(mango.indexOf('x')) //없는 문자열의 값 -1 반환
//slice
console.log(mango.slice(5)) //5부터 끝까지 mango
console.log(mango.slice(0,5))   //0부터 4까지 문자 추출 apple
console.log(mango.slice(-1))    //음수는 뒤에서 부터 센다. 맨끝 -1 o
console.log(mango.slice(-4))    //-4번째인 a부터 ango를 가져온다
//실제 문자열이 변하는 것은 아니다

let msg2 = 'Wow~ It is so amazing!!!';
console.log(msg2.replace('Wow', 'Hey'))
console.log(msg2.replaceAll('o', 'O'))  //replace면 첫번째 o만 변경된다

let date = '2024.1.10';
//2024-1-10
console.log(date.replaceAll('.','-'));

console.log('abc'.repeat(10))   //(반복횟수)
console.log(date.split('.'))    //(문자)기준으로 구분하여 배열의 요소 생성

// 배열 관련 메소드
/*
    -length(속성)
    -push, pop, unshift, shift, indexOf, join, reverse
    -includes, map, forEach, find, filter
    -for ~ of (함수 아님)
*/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'puppy', 'rabbit', 'hamster'];
//인덱스 지정 값 추가 가능(번호를 알아야한다는 단점)
arr1[5] = 6;
console.log(arr1)

arr1 = [1, 2, 3, 4, 5];
arr1.push(6)
arr1.push(7)
arr1.push(10)
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1)

arr2.unshift('cat')
console.log(arr2)
arr2.shift();
console.log(arr2)

// includes 매개변수 한개(배열요소) 논리값 도출, 배열에있으면 true, 없으면 false
console.log(arr2.includes('cat'))
console.log(arr2.includes('quakka'))

//indexOf 문자열과 동일, 몇 번 인덱스에 있는지, 없으면 -1 도출
console.log(arr2.indexOf('quakka'))
arr1.reverse()  //실제로 배열의 순서를 변경시킨다
console.log(arr1)   

//join  split의 반대, 배열을 기호를 중심으로 문자열로 변경함
str1 = str1.split('');
console.log(str1)
str1 = str1.join('');
console.log(str1)

// 반복문 - for of & for each
let arr3 = [5,6,7,8,9];
let alphbets = ['a', 'b', 'c', 'd', 'e', 'f'];
for(let i=0; i<arr3.length; i++) {
    console.log(arr3[i]);
}
console.log('========================')
for(let a of arr3) {
    console.log(a)
}
for(let alphbet of alphbets) {
    console.log(alphbet)
}

//for each
/*
배열.forEach(function(element[, index, array]){
    실행문
})
*/
console.log('===========for each=============')
arr3.forEach(function(element, index, arr){
    console.log(element, index, arr)
})
//순서가 중요, 매개변수 순서에 따라 출력

//filter
// return이후 조건을 만족하는 값들을 모아 배열로 반환
// let arr2 = ['quakka', 'puppy', 'rabbit', 'hamster'];
let six = arr2.filter(function(word){
    return word.length === 6;
})
let six2 = arr2.filter((word)=>{
    return word.length === 6;
})
console.log(arr2)
//변경되는게 아니라서 새 변수 저장 필요
let six3 = arr2.filter((word)=> word.length === 6)
//화살표 함수에서 한줄에 실행문 쓰면 return의 의미를 자동으로 포함한다(안써도됨!!!) 중괄호도 X
console.log(six)
console.log(six2)
console.log(six3)

//map 
//배열 내의 모든 요소에 대해 함수 호출한 결과(연산결과)를 모아서 새로운 배열로 반환
let arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function(element){
    return element * 3;
})
console.log(multiArr)

//find
//배열에서 특정조건을 만족하는 첫번째 요소를 값으로 반환
let findResult = multiArr.find(function(element){
    return element > 10;
})
console.log(findResult) //조건 충족 첫번째 값 한개

console.log('===실습문제1===');
let num100 = [];
for(let i = 1; i<101; i++) {
    num100.push(i)
}
console.log(num100)
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
for(let i=0; i<num100.length; i++) {
    sum1 += num100[i];
}
console.log(sum1);
for(let num of num100 ) {
    sum2 += num;
}
console.log(sum2);
num100.forEach(function(num){
    sum3 += num
})
console.log(sum3);

console.log('===실습문제2===');
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

let same = []
let diff = []
for(let fruit of fruits1) {
    if(fruits2.includes(fruit)) {
        same.push(fruit);
    }
}
console.log(same)

for(let fruit of fruits1) {
    if(fruits2.includes(fruit)) {
        continue;
    }
    diff.push(fruit);
}
console.log(diff)

console.log('===실습문제3===');
let today = new Date().getDay;
if(today===0||today===6) {
    console.log('오늘은 주말입니다')
} else {
    console.log('오늘은 평일입니다')
}
console.log('===실습문제4===');
let randomNum = Math.floor(Math.random() * 11);
console.log(`랜덤숫자는 바로 ${randomNum}입니다!`)