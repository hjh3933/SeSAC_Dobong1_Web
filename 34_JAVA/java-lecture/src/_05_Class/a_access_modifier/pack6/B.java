package _05_Class.a_access_modifier.pack6;

public class B {
    public void methodB() {
        // 같은 패키지에서는 생성자, 필드, 메소드 모두에게 접근가능
        A a = new A();
        a.field1 = 2;
        a.methodA();
    }
}
