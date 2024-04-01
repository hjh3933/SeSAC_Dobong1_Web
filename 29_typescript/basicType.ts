let number: number = 1;
console.log(number);
// number = "dddd"; 빨간줄이 뜨면서 오류 발생 string타입은 number타입으로 할당될 수 없음

//기본형(primitive)
let str: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

//객체형
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ["a", "b", "c"];

//number or string타입이 올 수 있는 배열
const arr1: (number | string)[] = [1, 2, 3, "a", "b", "c"];
//boolean, null, number가 올 수 있는 arr2
const arr2: Array<boolean | null | number[]> = [[1, 2, 3], true, null]; //문자열 넣으면 오류발생

//어떤 자료형이든지 상관없는 배열 any
const arr3: any[] = [1, 2, false, null, "하이", [], {}];

//object
let obj1: object = {
  name: "allie",
  age: 11,
};
