package _05_Class.b_static;

/*
 * 정적(static)멤버
 * - 인스턴스를 생성할 필요 없이 바로 접근할 수 있다.
 *  - new ClassName을 통해서 객체를 생성할 필요가 없음
 * - 정적 메소드와 정적 블록은 객체가 없어도 실행가능하므로, 내부에 인스턴스 필드나 메소드 사용 불가능
 * - this 사용 불가능
 * */

public class Calculator {
    static double pi = 3.141592;
    int name; // static 메소드가 접근 불가

    static int plus(int x, int y) {
        return x + y;
    }

    static int minus(int x, int y) {
        return x - y;
    }

    static double circumference(int r) {
        return 2 * r * pi;
    }

    public static void main(String[] args) {
        // 같은 클래스에서사용: 함수, 필드명 바로 사용
        int num1 = 10;
        int num2 = 5;
        // 다른 클래스에서 사용: className.field로 바로 접근가능 인스턴스 필요X
        double circleArea = num1 * num1 * pi;
        int plusResult = plus(num1, num2);
        int minusResult = minus(num1, num2);
        double lengthCircleResult = circumference(num1);

        System.out.println("원의 넓이: " + circleArea);
        System.out.println("원의 둘레: " + lengthCircleResult);
        System.out.println("덧셈 결과: " + plusResult);
        System.out.println("뺄셈 결과: " + minusResult);
    }
}
