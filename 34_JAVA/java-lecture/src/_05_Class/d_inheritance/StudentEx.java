package _05_Class.d_inheritance;

public class StudentEx {
    public static void main(String[] args) {
        //     부모 자식 필드가 public인 경우
        // Student st1 = new Student(20, "juhee", "dobong");
        // System.out.println(st1.name);
        // System.out.println(st1.age);
        // System.out.println(st1.campus);
        // // 자식 메소드
        // st1.setCampus("도봉");
        // // 부모 메소드
        // st1.say();
        // st1.eat("바나나");

        Student st2 = new Student(24, "juhee");
        // st2.name; private 필드 접근 불가
        System.out.println(st2.getName());
        System.out.println(st2.getAge());
        System.out.println(st2.getCampus());
        st2.setCampus("도봉");
        st2.say();
        st2.eat("사과");
    }
}
