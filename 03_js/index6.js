/* 1. for문 */
/*
for(변수 선언과 초기값 할당; 조건식(어디까지 증가? 감소?); 증감식) {
    반복할 실행문;
}
*/

for(let i=0;i<10; i++) {
    console.log('안녕', i)
}

for(let i = 0; i<10; i+=2) {
    console.log(`안녕하세요${i}`)
}
//12345 다양한 방법
for(let i = 1; i<=5; i++) {
    console.log(i)
}
for(let i = 1; i<6; i++) {
    console.log(i)
}
for(let i = 0; i<5; i++) {
    console.log(i+1)
}

//감소
for(let i = 5; i>0; i--) {
    console.log(i)
}

console.log('=============================')
//1부터 n까지의 덧셈 n=11
let n = 11;
let sum1 = 0;
for(let i = 1; i<=n; i++) {
    sum1 = sum1 + i;
    // sum1 += i; 축약도 가능
}
console.log(`1부터 11까지의 합은 ${sum1}`)

/* 배열과 함께 사용하는 for문 */
let fruits = ['사과', '망고', '오렌지', '망고스틴'];
console.log(fruits.length)  //배열의 길이(요소 개수)를 출력해주는 .length
for(let i =0; i<fruits.length; i++) {
    console.log('i like',fruits[i]);
}

let numsArr = [99, 99, 98, 95, 82];
let sum2 = 0
for(let i = 0; i<numsArr.length; i++) {
    sum2 += numsArr[i];
}
console.log(`배열의 합은 ${sum2}`)

/* 2. while문
    초기화식
    while(조건식) {
        조건이 참일 때 실행문;
        증감식;
    }
*/
let n2 = 1; //초기화식
while(n2<=5) {  //조건식
    console.log(n2);    //실행문
    n2++;   //증감식
}
console.log('=================')
n2 = 10;
while(n2>4) {
    console.log(n2);
    n2--;
}
console.log('=================')
//1~10까지 짝수만 출력
n2 = 1;
while(n2<=10) {
    if(n2%2===0) {
        console.log(n2)
    }
    n2++;
}
console.log('=================')
//10부터 1까지 감소 홀수만
n2 = 10;
while(n2>0) {
    if(n2%2===1) {
        console.log(n2);
    }
    n2--;
}
//break활용하기
console.log('=================')
let b = 0;
while(true) {
    console.log(b);
    b++;    //증감식 위치 주의
    if(b>10) break;
}
//continue활용하기
console.log('=================')
let sum3 = 0;
for(let i =0; i<10; i++) {
    if(i%2===0) continue;   //짝수면 스킵
    sum3 += i;  
}
console.log(sum3)   //13579 홀수의 합
//confirm() 확인, 취소창을 띄운다 확인은 true, 취소는 false
let n3 = 0;
// while(confirm('계속 진행할까요?')) {
//     n3++;
//     alert(`${n3}번째 alert창`);
// }
//alert prompt(문자열 리턴) confirm(논리값 리턴)
console.log('13의 배수인 홀수 출력')
for(let i = 1;i<=10000; i++) {
    if(i%13===0&&i%2!==0) {
        console.log(i);
    }
}
console.log('for문 구구단 2단에서 9단');
for(let i = 2; i<10; i++) {
    console.log(`===${i}단===`);
    for(let j = 1; j<10; j++) {
        console.log(`${i}X${j}=${i*j}`);
    }
}
console.log('0~100중에 2또는 5의 배수 총합 while문');
let n4 = 0;
let sum4 = 0;
while(n4<101) {
    if(n4%5===0||n4%2===0) sum4 += n4;
    n4++;
}
console.log(sum4)
