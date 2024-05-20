package _05_Class.d_inheritance;

public class Student extends Person {
    // public String campus;
    // ***** Case1. 필드가 public인 경우
    // public Student(int age, String name, String campus) {

    // 1-1 부모 기본 생성자
    // super(); // 부모 생성자, 매개변수 없으면 생략가능 알아서 실행됨
    // public은 어디서든지 접근가능
    // this.age = age;
    // this.name = name;

    // 1-2 부모 매개변수 받는 생성자 - 생략 불가능
    // super(age, name);

    //     this.campus = campus;
    //     System.out.println("Student 클래스 생성자가 실행되었습니다");
    // }

    // ***** Case1. 필드가 private인 경우
    private String campus;

    public Student(int age, String name) {
        // super(); 생략가능
        // this.name(X)
        super(age, name);

    }

    public String getCampus() {
        return campus;
    }

    public void setCampus(String campus) {
        this.campus = campus;
        System.out.println(campus + "캠퍼스에서 공부중입니다");
    }

}
