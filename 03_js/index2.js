// js는 작은 따옴표 큰 따옴표 구분이 없다
// console.log('test')

// 1. string 문자열
// - 텍스트 정보
// - 숫자, 특수문자도 따옴표 안에있으면 문자열
// - 따옴표 안에 따옴표가 있다면?
//     - "안에 '작은따옴표'가 있어요"
//     - '안에 "큰따옴표"가 있어요'

let myName = "진형"
let number1 = '128'
console.log(myName)
console.log(number1)

// 2. number 숫자
let number2 = 128
let opacity = 0.7
console.log(number2)
console.log(opacity)

// NaN (not a number)
console.log('apple'-3)

//3. boolean
// true or false
let checked = true;
let isShow = false;
console.log(checked, isShow)

//4. undefined
// 값도 없고 타입도 지정되어있지 않은 상태
let undef;
console.log(undef)

//5. null 
// 의도적으로 비어있는 값
let empty = null;
console.log(empty)

//6. array
//순서가 있는 데이터 꾸러미 [대괄호]
let fruits = ["orange", "pineapple", "strawberry"]
console.log(fruits[2])
console.log(fruits[0])

let data = [22, "22", false]
// console 창 색이 다름 문자랑 숫자는
console.log(data[0])
console.log(data[1])
console.log(data[2])

//2차원 배열
const korean = [
    ["가", "나", "다"],
    ["라", "마", "바"],
    ["사", "아", "자"]
]
// 가나다 다 나옴
console.log(korean[0])
// 0행의 1번 데이터 나옴 = "나"
console.log(korean[0][1])

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
// 아이스크림 뽑기
console.log(letters[3][0], letters[1][3], letters[0][1], letters[0][3], letters[2][2])

//3차원배열 
const num = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]
//8뽑기
console.log(num[1][0][1])

//7. object
// key value 배열은 순서가 있지만 오브젝트는 순서 중요하지 않다(key이름으로 부르기 때문)
let cat = {
    name: "나비",
    age: 2,
    isCute: true,
    mew: function() {
        return "냐옹";
    }
}
console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)
// 함수를 부를때는 ()를 함께
console.log(cat.mew())
// 속성추가
cat.like = 'tuna'
//값 변경
cat.age = 3
//cat 자체를 불러오기
console.log(cat)

//[대괄호]표기법
let dog = {
    name: 'coco',
    isPoodle: true,
    age: 3,
    sibling:['max', 'lucy']
}
console.log(dog.name)
console.log(dog["name"])
console.log(dog["age"])
console.log(dog["sibling"][1])

//object 만들어보기
let im = {
    name: '홍주희',
    age: 24,
    like: ['닭고기', '고양이', '게임', '베이킹']
}
console.log(im.name)
console.log(im.like[3])

// let mathScore = prompt("수학 점수를 입력 하세요");
// let engScore = prompt("영어 점수를 입력 하세요");

//명시적 형변환 String(문자로 바꿀 변수) Number(숫자로 바꿀 변수)
// let mathScoreT = Number(mathScore)
// let engScoreT = Number(engScore)

// let avg = (mathScoreT + engScoreT) / 2; //'5050' / 2
// console.log(avg);   
// //자동으로 형변환을 해서 NaN이 아니라 2525가 나오고 있는 상황;; 암튼 제대로된 계산은 안되고 있음(평균)

// console.log(typeof '문자') //string
// console.log(typeof mathScore) //string
// console.log(typeof mathScoreT) //number
// console.log(typeof true)    //?? boolean이 아니라 object가 나온다고 하지 않았나요?? boolean이 나온답니다
// console.log(typeof [])  //object
// console.log(typeof {}) //object
// console.log(typeof NaN) //number
// console.log(typeof null) //object
// console.log(typeof undefined) //undefined

//형변환
//1. -> string
console.log('----------------------------------------')
let str1 = true;    //boolean
let str2 = 123; //number
let str3 = null;    //null
//String으로 바꾸기
console.log(String(str1))
console.log(String(str2))
console.log(String(str3))
//확인
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))

//2. ->number
let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = '123.9';

console.log(Number(n1)) //1
console.log(Number(n2)) //0
console.log(Number(n3))
console.log(Number(n4))
//모두 number로 잘 바뀌었다고 하네요
console.log(typeof Number(n4))
//정수형으로 변경하는 함수
console.log(parseInt(n4))   //123(소수점버림)

//실습

console.log(typeof 10 + " isn't " + typeof '' + ' data type.')
console.log('typeof를 array이나 null에 사용하면, "' + typeof null + '" 결과를 얻을 수 있습니다.')

let mathScore = "77"
let engScore = "88"
let avgScore = (Number(mathScore) + Number(engScore)) /2 
console.log(avgScore)

//let a = 12
//let a = 9(X)
//a = 9(O) 재할당 가능
//const 재할당도 불가능, 가장 엄격, 선언과 동시에 초기화(값 부여)해야한다

const cat2 = {
    name: "나비",
    age: 2,
    isCute: true,
    mew: function() {
        return "냐옹";
    }
}
//증감연산자 순서
let result1, result2;
let num1 = 10, num2 = 10;
//대입후 -> 증감
result1 = num1++;
console.log(result1);   //10
//증감후 -> 대입
result2 = ++num2;
console.log(result2);   //11