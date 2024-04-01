// tuple
// 튜플: 개수와 데이터타입의 순서가 정해져있는 배열

let drink: [string, string] = ["a", "b"]; //길이와 타입, 순서를 반드시 지켜야한다
let drink2: [string, string, number];
drink2 = ["cola", "콜라", 1];
// console.log(drink2);
// console.log(drink2[0]);
// console.log(...drink2);

drink2.push("push되나요?");
// console.log(drink2); //push됩니다
drink2[0] = "사이다";
//typescript의 type추론
/*
네번째 데이터 타입은 미리 선언되어 있지 않지만,
string, number로만 이루어진 튜플을 선언했기 때문에
타입스크립트가 자동으로 타입을 추론해서 결정함(string|number)[]
*/
// drink2.push(null); //string이나 number가 아니에요 라고 뜬다

//readonly = 수정불가, push불가
let drink3: readonly [string, number] = ["cola", 2000];
// drink3[0] = "cider";
// drink3.push("push되나요?");

// ----------------------enum-----------------------
//enum선언
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "라떼",
}
//선언 이후 변경불가
// Cafe.americano = 2;

// console.log(Auth.admin); //객체처럼 사용
// console.log(Auth.user);

// console.log(Cafe.americano);
// console.log(Cafe.latte);

enum Cake {
  choco,
  vanila,
  strawberry,
  kiwi = "kiwi",
}
// 초기화하지 않으면 맨 위부터 0,1,2 순서대로 할당한다. 숫자와 문자를 함께 사용할 수 있다
// console.log("-------------------------");
// console.log(Cake.choco);
// console.log(Cake.vanila);
// console.log(Cake.strawberry);
// console.log(Cake.kiwi);

let olimpic_newgame: readonly [object, boolean];
olimpic_newgame = [{ name: "쇼트트랙", type: "혼성 계주" }, true];
// olimpic_newgame[1] = false; 빨간줄

//--------------------------interface
interface Student {
  //   name: string | number; //요로케도 가능
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "allie",
  isPassed: true,
};

type Score = "A+" | "A" | "B+" | "B" | "C" | "D" | "F";

//interface상속도 가능
interface 야구부 extends Student {
  // name과 isPassed외의 키를 추가 설정가능
  position: string;
  height: number;
  weight: number;
  //   backNumber는 변경불가
  readonly backNumber?: number; // ? :필수값이 아님
  //key가 숫자형인게 여러개 올 수 있다
  [grade: number]: Score;
}

const otani: 야구부 = {
  name: "오타니",
  isPassed: true,
  position: "pitcher",
  weight: 95.3,
  height: 193,
  backNumber: 17,
  1: "A+",
};
console.log(otani);
// otani.backNumber = 15; //빨간줄
otani.isPassed = false; //변경가능
otani["2"] = "B+";
console.log(otani);

const junghoo: 야구부 = {
  name: "이정후",
  isPassed: true,
  position: "hitter",
  weight: 88,
  height: 185,
};

console.log(junghoo);

//// 함수의 타입 설정 (변수타입) 리턴타입
interface Calc {
  (a: number, b: number): number;
}
const sum: Calc = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(1, 2));

interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}

//교차타입& 모든 타입을 만족해야한다
const toyCar: Toy & Car = {
  name: "타요", //겹쳐서 하나만 써도됨
  color: "blue",
  price: 50000,
  start() {
    console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
  },
};

toyCar.start();

// 2. type
// 객체의 타입을 만드는 중
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: "Female" | "Male";
};

type Gender = "Female" | "Male";
type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person2 = {
  name: "다니엘",
  gender: "Female",
  age: 20,
};

// daniel.gender = "여성";
// daniel.gender = "female";
// daniel.gender = "male";
daniel.gender = "Female";

let c: Person2 = {
  name: "a",
  age: 20,
  gender: "Male",
};

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};
let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
