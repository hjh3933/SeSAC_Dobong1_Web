package _05_Class.a_access_modifier.pack3;

public class A {
    //     field1, field2, field3
    //     각각 public, default, private
    public int filed1;
    int filed2;
    private int filed3;

    // 생성자
    public A() {
        this.filed1 = 1;
        this.filed2 = 2;
        this.filed3 = 3;

        method1();
        method2();
        method3();
    }

    //     method1, method2, method3
    //     각각 public, default, private
    public void method1() {
    }

    void method2() {
    }

    private void method3() {
    }
}
