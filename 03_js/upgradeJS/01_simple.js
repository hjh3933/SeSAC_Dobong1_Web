// 구조 분해 할당
// 1. 배열의 구조분해할당

const arr = ['tomato', 'kiwi','banana'];
console.log(arr[2]);
const [to, ki, ba] = arr;
console.log(ki);

const arr2 = ['빨', '주', '노', '초'];
const [red, orange, , green] = arr2;
console.log(red, green);

let x='first';
let y='second';
[x,y] = [y,x];

console.log(x, y);

// 정석 바꾸기
let x2='first';
let y2='second';
let temp;
temp = x2;
x2 = y2;
y2 = temp;

// 2. 객체의 구조분해할당
const obj = {
    title: '제목',
    content: '내용',
    number: 0
};
console.log(obj.title);

const {title: t2, content, number} = obj;
// console.log(title);
console.log(t2);

// 전개 구문 ...(연산자)
const arr3 = [1, 2, 3, 4, 5];
const arr4 = ['a', 'b', 'c'];
console.log(arr3);
console.log(arr4);

for(let el of arr3) {
    console.log(el);
}

console.log(...arr3);

//{1,2,3,4,5.'a','b','c'} 이어보기(여러 방법)
const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4];
console.log('===============================');
console.log(arr5);
console.log(arr6);

const str = 'alliehigh';
let strToArr = [...str];
let strToArr2 = str.split('');
console.log(strToArr);
console.log(strToArr2);

const me1 = {
    name: 'allie',
    height: 163,
    friend: null,
    married: false
}
const me2 = {
    name: 'juhee',
    like: ['코딩하기', '놀러가기'],
    greeting: function() {
        console.log(`안녕하세요 제 이름은 ${this.name}이고요 키는 ${this.height}입니다`)
    }
}

// key가 겹치면? 뒤에 있는 value가 들어간다, 나머지는 합쳐짐
let me = {...me1, ...me2};
console.log(me);
me.greeting();

// 실습 
const word1 = 'abc';
const word2 = 'xyz';
//1번 방법
const word = [...word1, ...word2];
console.log(word);
//2번 방법
const word3 = (word1+word2).split('');
console.log(word3);

//rest ...이름 => 한번에 몰아서 배열로 저장할 수 있어요
const obj2 = {
    title: '제목',
    content: '내용',
    num: 0,
    key4: 'value4',
    key5: 'value5'
}

const {title:a, content:b, num:c, ...obj3} = obj2;
console.log(obj3);

console.log('==============================')
function test(...values) {
    console.log(values) //배열로 값 모두 받음
    //1번 2번 값은 값으로 가져오고 나머지는 배열로 가져와라
    //rest는 항상 마지막에 있어야함!!!!!!!
    const [a, b, ...rest] = values;
    console.log(a)  //1
    console.log(b)  //2
    console.log(rest)   //3, 4, 5, 6 배열 출력
}
//여러개의 값을 인자로 받을 수 있음
test(1,2,3,4,5,6)

console.log('====================');
//매개변수가 몇개가 들어오든 합산해주는 함수 addNumber()
let result=0;
function addNumber(...numbers) {
    for(let number of numbers) {
        result += number;
    }
    return result;
    //선생님 방법
    // let sum = 0;
    // numbers.forEach((el)=>{
    //     sum += el;
    // })
    // return sum;
}
console.log('합은: ',addNumber(1,2,3,4,5,6,7));