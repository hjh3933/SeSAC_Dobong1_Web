package _05_Class.c_final;

public class Const {
    // public + static + UPPERNAME 관례
    public static final int MAX_VALUE = 10;
    public static final String GREETING = "Hello, World";

    // only static
    static int MIN_VALUE = 0; // 수정가능
    // only final - 인스턴스에 속해있는 변수
    final String name = "allie";
}
