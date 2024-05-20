package _05_Class.a_access_modifier.pack7;

import _05_Class.a_access_modifier.pack6.A;

// 외부 클래스지만 A클래스를 상속받는 클래스

public class D extends A {
    public D() {
        // A의 필드와 메소드, 생성자에 접근가능
        // super(); // 생성자 부르기
        this.field1 = 11;
        this.methodA();
    }
}
