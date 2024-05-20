package _05_Class.Prac2;

public class Baek extends Student {
    public Baek(String name, String school, int age, int studentNumber) {
        super(name, school, age, studentNumber);
    }

    @Override
    public void todo() {
        System.out.println("점심은 백종원 피자");
    }
}
