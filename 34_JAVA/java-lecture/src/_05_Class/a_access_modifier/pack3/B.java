package _05_Class.a_access_modifier.pack3;

public class B {
    public static void main(String[] args) {
        A a = new A(); // 같은 패키지 내의 클래스 A

        System.out.println(a.filed1);
        System.out.println(a.filed2);
        // System.out.println(a.filed3); private 접근 불가

        a.filed1 = 11;
        a.filed2 = 22;
        System.out.println(a.filed2);

        a.method1();
        a.method2();
        // a.method3(); private 접근 불가
    }
}
