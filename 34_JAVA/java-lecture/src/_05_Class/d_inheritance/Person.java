package _05_Class.d_inheritance;

// 01_ 부모클래스(슈퍼클래스) 정의
// 상속
//  - java에서는 다중상속 지원하지 않음(여러 개의 부모를 가질 수 없다)
public class Person {
    // // ***** Case1. 필드가 public인 경우
    // public int age;
    // public String name;
    //
    // // 1-1. 부모클래스가 기본 생성자를 가지는 경우
    // // public Person() {
    // //     System.out.println("부모 클래스 person 생성자가 실행되었습니다");
    // // }
    // // 1-2. 부모 클래스가 매개변수를 갖는 생성자를 가지는 경우
    // public Person(int age, String name) {
    //     this.age = age;
    //     this.name = name;
    //     System.out.println("부모 클래스 person(int age, String name) 생성자가 실행되었습니다");
    // }
    //
    // public void say() {
    //     System.out.println("안녕하세요");
    // }
    //
    // public void eat(String food) {
    //     System.out.println(food + "를 먹고있어요");
    // }

    // ***** Case1. 필드가 private인 경우
    private String name;
    private int age;

    // TODO: person 클래스에서 매개변수를 받아서 name, age초기화
    public Person(int age, String name) {
        setAge(age);
        setName(name);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // 일반 메소드
    public void say() {
        System.out.println("안녕하세요");
    }

    public void eat(String food) {
        System.out.println(food + "를 먹고있어요");
    }
}
