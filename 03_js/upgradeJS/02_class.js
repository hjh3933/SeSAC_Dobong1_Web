// class: object를 만드는 틀

/*
    속성
    - 만들어진연도 year
    - 이름 name
    - 창문 개수 window
    메소드
    - 건물의 나이 출력 getAge()
    - 창문의 개수 출력 getWindow()
*/
class House {
    //생성자
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    //메소드
    getAge() {
        console.log(`${this.name}은 건축한지 ${2024-this.year}년 됐어요`);
    }
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다`);
    }
}
// const house1 = {
//     year: 1789,
//     name: 'old',
//     window: 1,
//     어쩌구 메소드
// }
//여러개의 객체 생성
const house1 = new House(1789, 'old', 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.getWindow();
console.log(house2.name);

//extends 키워드로 상속하기
//House의 속성과 메소드 사용가능
//House << Apartment
console.log('=====상속======');
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        // 상속받는 친구들은 super로 적으면 된다
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        //백틱 사용시 enter도 먹음
        return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 개수는 ${this.window}`; 
    }

    //overriding: 부모클래스와 같은 메소드 이름으로 재정의(덮어쓰기)
    getWindow() {
        return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`
    }
}
const apt1 = new Apartment(2022, 'raemian', 19, 50, 'kcc');
console.log(apt1.getWindow());  //재정의
console.log(apt1.getAptInfo()); //새로 생성  
console.log(apt1.getAge()); //그냥 상속  
console.log(apt1); //객채

//실습문제
console.log('실습================================');
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getSqrt() {
        return Math.sqrt(this.width**2 + this.height**2);
    }
}
class Triangle extends Shape {
    constructor(width, height) {
        super(width, height)
    }
    getArea() {
        return this.width * this.height / 2;
    }
}
class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
    }
    getArea() {
        return this.radius**2 * 3.14;
    }
}
let rec2 = new Rectangle(3, 3);
let rec3 = new Triangle(3, 3);
let rec4 = new Circle(3 ,3 ,3);

console.log('사각형 넓이는: ', rec2.getArea());
console.log('삼각형 넓이는: ', rec3.getArea());
console.log('원의 넓이는: ', rec4.getArea());