package _05_Class.b_static;

public class CalculatorEx {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;
        // 다른 클래스에서 사용: className.field로 바로 접근가능 인스턴스 필요X
        double circleArea = num1 * num1 * Calculator.pi;
        int plusResult = Calculator.plus(num1, num2);
        int minusResult = Calculator.minus(num1, num2);
        double lengthCircleResult = Calculator.circumference(num1);

        System.out.println("원의 넓이: " + circleArea);
        System.out.println("원의 둘레: " + lengthCircleResult);
        System.out.println("덧셈 결과: " + plusResult);
        System.out.println("뺄셈 결과: " + minusResult);
    }
}
