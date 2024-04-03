function printSome<T>(x: T, y: T): T {
  console.log(x);
  console.log(y);
  return y;
}
// 호출 시 제네릭도 함께 전달하여 사용해야한다
printSome<number>(1, 3);
printSome<string>("hi", "안녕");

function printSome2<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}
// printSome2(1, "안녕하세요"); 이렇게 해도 왜 문제가 없지?
printSome2<number, string>(1, "안녕하세요");

function arrLength1(arr: any[]): number {
  return arr.length;
}
function getValue1(value: any): any {
  return value;
}
//ts에서는 any사용보다 generic사용을 권장함
//generic으로 만들어보기
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}
function getValue2<T>(value: T): T {
  return value;
}
console.log(arrLength2<number>([1, 2, 4, 5, 6, 4, 3]));
console.log(getValue2<number[]>([1, 2, 4, 5, 6, 4, 3]));

console.log("=========================실습==================");

function arrElement<T>(arr: T[], index: number): T | boolean {
  if (index >= arr.length) {
    return false;
  } else {
    return arr[index];
  }
}
console.log(arrElement<string>(["a"], 1));

//### interface & generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}
// T타입으로 string을 사용
const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-13"),
  option: "black",
};
// T타입으로 객체타입 적용
type iphoneOption = {
  color: string;
  storage: number;
};
const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createAt: new Date("2024-10-6"),
  option: {
    color: "silver",
    storage: 256,
  },
};
console.log("==========================================");
console.log(iphone15);
console.log(iphone16);

// 타입스크립트는 초기화된 값을 바탕으로 타입을 자동추론함
let aa = 1;
let bb = "string";
let cc = true;

// aa = "안녕하세요"; 불가능 ts의 타입 추론
