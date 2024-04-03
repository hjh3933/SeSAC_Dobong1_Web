function print(a: number, b: number, c: number): void {
  //매개변수 타입을 적지 않으면 오류발생, 리턴 타입은 적지않아도 알아서 추론
  console.log(a);
  console.log(b);
  console.log(c);
}
print(1, 2, 4);
// print(1, 2, 4, 5); error
// print(1, 2); error
// print(1, 2, "ffff"); error
function print2(a: number, b: number, c?: number): void {
  //매개변수 타입을 적지 않으면 오류발생, 리턴 타입은 적지않아도 알아서 추론
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(1, 2, 3);
print2(1, 2); //? 사용 1,2,undefined 출력

//void
function sayHello(): void {
  console.log("hello");
}
sayHello();
function concatStr(a: string, b: number): string {
  return a + b;
}
//원의 넓이를 구하는 함수
function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));
console.log(concatStr("apple", 3000));

// 함수 표현식으로
const triangleArea = (w: number, h: number): number => (w * h) / 2;
console.log("삼각형의 넓이", triangleArea(2, 4));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}
const jh: Greet = {
  name: "allie",
  hi() {
    return "안녕 내 이름은 " + this.name + "이야";
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다.`;
  },
};
console.log("============================================");
console.log(jh.hi());
console.log(jh.bye(4));

//never type
//항상 함수의 끝에 절대 도달하지 않는 경우에만 never 타입 할당 가능
function goingOn(a: number): never {
  while (true) {
    console.log("끝나지 않는 함수입니다.");
    // if (a > 10) break; 빠져나올 수 있는 조건이 추가되면 never타입 사용불가 빨간줄 생긴다
  }
}

// 숫자가 오면 더하기
//문자가 오면 문자 이어주기
// function addSomething(x: string | number, y: string | number): string | number {
//   return x + y;
// }

//오버로딩, 오버라이딩
/*
- 오버라이딩: 클래스에서 상속을 했을 때, 메소드 재정의
- 오버로딩:  함수에서 매개변수의 개수나 타입, 함수의 타입이 다를 때
            같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음
            함수의 이름을 똑같이 사용하기 때문에 비슷한 기능일 때만 사용할 수 있음
*/
//오버로딩
function addSomething(x: string, y: string): string;
function addSomething(x: number, y: number): number;
function addSomething(x: any, y: any) {
  //구현은 any
  return x + y;
}
addSomething(1, 2);
addSomething("안녕", "하세요");
console.log(addSomething(1, 2));
console.log(addSomething("안녕", "하세요"));
// addSomething("안녕", true); 불가능
// addSomething("안녕", 45); 불가능

//실습문제
console.log("============실습====================");
function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(5, 11);

function sum2(...nums: Array<number>): number {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sum2(1, 2, 3, 4, 10));
