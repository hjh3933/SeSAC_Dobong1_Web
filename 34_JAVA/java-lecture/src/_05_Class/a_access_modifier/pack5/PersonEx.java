package _05_Class.a_access_modifier.pack5;

public class PersonEx {
    public static void main(String[] args) {
        Person p1 = new Person(10, "pooh");
        Person p2 = new Person(11, "eeyore");

        // System.out.println(p1.name); private이므로 접근 불가
        System.out.println("p1의 이름: " + p1.getName());
        System.out.println("p1의 나이: " + p1.getAge());

        // p2.age = 5;
        p2.setAge(5);
        System.out.println("p2의 이름은 " + p2.getName() + " p2의 나이는 " + p2.getAge());
        // if로 음수값 예외처리 중
        p2.setAge(-5);
        System.out.println("p2의 이름은 " + p2.getName() + " p2의 나이는 " + p2.getAge());
    }
}
