/*
 var
 -재할당, 재선언 모두 가능
 -재선언: 바람직하지 않음(중복선언)
 */
var name = '홍길동'
var name = '아무개'
console.log(name)

/* let
    -재선언 불가능
    -재할당 가능
    -초기화 작업 필요 없음(최초선언 시 값 할당 안해도 문제 없음)
*/
let c;
c = 10; //재할당
// let c; 불가
console.log(c) 

/* const
    -재선언, 재할당 모두 불가
    -변하지 않는 값을 변수에 저장할 때 사용
    -최초선언시 반드시 값 할당(초기화) 
*/
// const b; 오류
const b = 1;   
// b = 2; 오류

let q1 = 3;
// q1 - 3; 그냥 아무것도 아닌 연산, 저장X
q1 = q1 - 3;    //대입해야 저장됨
console.log(q1) //0

//비교 연산자
//(참고) =  은 대입연산자
/* 1. == (값만 비교하는 연산자) */
console.log('==연산자')
console.log(1==1)
console.log(1==2)
console.log(1!=2)
console.log(1!=1)
console.log('1'==1)
console.log('1'!=1)
console.log(''== '0')  //f
console.log(false==0)   //t
console.log(''==0)   //t
console.log(undefined == null)   //t

//js의 이상한 점
console.log(''== '0')  //f
console.log('0'==0)   //t
console.log(''==0)   //t

//2. 비교연산자 ===(값과 data type까지 비교)
console.log('===연산자')
console.log('1'===1)    //f
console.log(undefined===null)    //f
console.log(''===0)    //f
console.log(1===1)    //t 값, 데이터 타입까지 완전히 같아야지만 true!

//3. 크기비교 -> false or true(비교연산자는 다 택1 출력)
console.log('비교 연산자')
console.log(2 > 1)
console.log(2 < 1)

//4. 산술 연산자
console.log('---산술---')
console.log(1+2)
console.log(1-2)
console.log(1*2)
console.log(7/2)
console.log(7%2)    //나머지
console.log(7**2)   //거듭제곱

//5. 논리 연산자
console.log('---논리---')
console.log(!true)  //f
console.log(!!true) //t
console.log(true&&true) //t
//&&
console.log(true&&true&&true&&true&&false) //f 
console.log(false&&true&&true&&true&&true) //f  성능에 더좋다 뒤에 확인 안해도 되서  
//||
console.log(true||true) //t
console.log(false||true) //t
console.log(false||false) //f

//문자와 변수를 같이 쓰는 방법
const str1 = 'allie'
const str2 = '서울'
//allie는 서울에 삽니다.
//+연산자 이용
console.log(str1+'는 '+str2+'에 삽니다.')
//,로 쓰면 변수, 문자들 사이에 띄어쓰기가 무조건 들어간다ㅠㅠ
console.log(str1,'는',str2,'에 삽니다.')
//백틱: ~아래에 있는 거, ${변수}로 표기 후 문자는 그냥 백틱안에 적으면 된다
console.log(`${str1}는 ${str2}에 삽니다.`)
const str3 = `${str1}는 ${str2}에 삽니다.`
const str4 = str1+`는 `+str2+`에 삽니다.`
console.log(str3)   //변수로 사용할 수도 있다.
console.log(str4)   //변수로 사용할 수도 있다.

