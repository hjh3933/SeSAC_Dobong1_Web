package _05_Class.a_access_modifier.pack7;

import _05_Class.a_access_modifier.pack6.A;

// A 클래스를 상속받지 않은 외부 패키지의 클래스
public class C {
    public void methodC() {
        // class는 public이라 접근 가능
        // but 생성자는 protected로 접근 불가(import해도 에러발생)
        // A a = new A(); 컴파일 에러 발생
        // a.field1 = 12; 컴파일 에러 발생
    }
}
