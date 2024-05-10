package _02_control_statement;

/*
 * method overloading
 * - 하나의 클래스에서 동일한 이름의 메서드를 여러 개 정의할 수 있음
 * - 함수의 이름은 같지만 매개변수 타입 개수, 순서, 함수 리턴 타입 등을 다르게 정의해야한다(아예 동일한 함수는 X)
 * - 함수의 동작이 유사할 때 사용
 * */
public class MethodOverloading {
    public static void main(String[] args) {
        //  static없는 함수는 클래스 인스턴스로 접근필요
        MethodOverloading ol = new MethodOverloading();
        System.out.println("정수 두 개 덧셈: " + ol.add(1, 2));
        System.out.println("실수 두 개 덧셈: " + ol.add(1.1, 2.3));
        System.out.println("정수 세 개 덧셈: " + ol.add(1, 2, 3));
        System.out.println("실수 세 개 덧셈: " + ol.add(1.1, 2.2, 3.3));

        System.out.println("실수 세개 덧셈?: " + ol.add(1.1, 2.2, 4.4)); // 기댓값: 7.7
        // 실제값 7.700000000001 (부동소수의 한계)
    }

    public int add(int x, int y) {
        return x + y;
    }

    public double add(double x, double y) {
        return x + y;
    }

    public int add(int x, int y, int z) {
        return x + y + z;
    }

    public double add(double x, double y, double z) {
        return x + y + z;
    }
}
