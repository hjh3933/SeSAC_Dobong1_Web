/* 1. if문 */
/* if(조건식) {조건이 참일 때 실행할 문장} */
if(5>3) console.log('5가 3보다 커요');

// let number = prompt('숫자 입력');
// number = Number(number);

//number 재선언
let number = 88;

/* if ~ else */
if(number > 10) {
    console.log('숫자가 10보다 큽니다')
} else {
    alert('10보다 작거나 같아요')
}

/* if ~ else if ~ else */
if(number > 10) {
    console.log('10보다 큽니다')
} else if(number === 10) {
    console.log('10입니다')
} else {
    console.log('10보다 작습니다')
}

let age = 12;

if(age>=20) {
    console.log('성인')
} else if(age>=17) {
    console.log('고등학생')
} else if(age>=14) {
    console.log('중학생')
} else if(age>=8) {
    console.log('초등학생')
} else if(age>=0) {
    console.log('유아')
}    

/* 2. switch~case문 
    - swtich의 괄호안과 case의 조건에는 비교식이 들어가지 않고
    값 자체가 들어간다
    - 자바 스크립트에선 조건이 많을 때 switch를 쓰는게 근소하게 성능에 유리함
    - break가 없으면 실행 후 아래 case 실행문도 실행해버림
*/

let a = 4;
switch (a) {
    case 3:
        console.log('3입니다');
        break;
    case 4:
        console.log('4입니다');
        break;
    case 5:
        console.log('5입니다');
        break;
    default:
        console.log('어떤 값인지 모르겠어요')
}
let score = 85;
/*
if문으로
90<= A<=100
80<= B<90
70<= C<80
60<= D<70
F<60
*/
// if(score > 100 || score < 0) {
//     console.log('잘못된 점수입니다')
// } else if(score >= 90) {
//     console.log('A')
// } else if(score >= 80) {
//     console.log('B')
// } else if(score >= 70) {
//     console.log('C')
// } else if(score >= 60) {
//     console.log('D')
// } else {
//     console.log('F')
// }

//switch
//0~100까지
let ox = parseInt(score/10);  //몫으로 계산
switch (ox) {
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}
//0보다 작거나 100이상인 경우 따로 예외처리 필요함

/*3항 연산자
    조건 ? 참일때 : 거짓일때
*/

let num = 4;
if(num%2 === 1) {
    console.log('홀수')
} else {
    console.log('짝수')
}

num%2 === 1 ? console.log('홀수') : console.log('짝수');

let now = new Date().getHours();
now < 12 ? console.log('오전입니다') : console.log('오후입니다');