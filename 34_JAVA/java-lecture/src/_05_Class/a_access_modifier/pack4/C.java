package _05_Class.a_access_modifier.pack4;

import _05_Class.a_access_modifier.pack3.A;

public class C {
    public static void main(String[] args) {
        A a = new A();
        System.out.println(a.filed1);
        // System.out.println(a.filed2); default 접근 불가
        a.method1();
        // a.method2(); default 접근 불가
        // a.method3(); private 접근 불가
    }
}
