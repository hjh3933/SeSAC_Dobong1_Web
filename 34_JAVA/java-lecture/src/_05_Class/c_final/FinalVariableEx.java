package _05_Class.c_final;

public class FinalVariableEx {
    public static void main(String[] args) {
        final int finalNumber = 10;
        // finalNumber = 20; readOnly 변경 불가능
        System.out.println("final Number " + finalNumber);
    }
}
