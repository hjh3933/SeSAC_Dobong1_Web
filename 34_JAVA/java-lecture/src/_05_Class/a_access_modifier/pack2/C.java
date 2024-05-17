package _05_Class.a_access_modifier.pack2;

import _05_Class.a_access_modifier.pack1.B;

public class C {
    // A a; // default A class 외부 패키지에서 접근 불가
    B b; // public B class 외부 패키지에서 import를 통해 접근 가능

    /*
     * C 클래스는 A, B 클래스와 다른 패키지에 있으므로
     * default 제한자인 A클래스에서는 에러가 발생
     * public 제한자인 B클래스에서는 정상 동작
     * */
}
