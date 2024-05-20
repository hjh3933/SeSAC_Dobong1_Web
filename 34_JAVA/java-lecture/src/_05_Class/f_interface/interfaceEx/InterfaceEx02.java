package _05_Class.f_interface.interfaceEx;

abstract class MyAbstractClass {
    public abstract void abstractMethod();
}

interface MyInterface {
    // public abstract 생략 상태
    void interfaceMethod();
}

// 추상 클래스와 인터페이스를 조합해서 사용할 수도 있다.
public class InterfaceEx02 extends MyAbstractClass implements MyInterface {
    @Override
    public void abstractMethod() {

    }

    @Override
    public void interfaceMethod() {

    }
}
