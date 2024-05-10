package _01_basic_syntax;

public class Operator {
    public static void main(String[] args) {
        int x, y;
        float a, b;

        // 대입 연산자 사용해서 재할당
        x = 11;
        y = 3;
        a = 11.0f;
        b = 3.0f;

        System.out.println("====== 정수형 연산 ======");
        System.out.println("x = " + x);
        System.out.println("y = " + y);
        System.out.println("x + y = " + (x + y));
        System.out.println("x - y = " + (x - y));
        System.out.println("x * y = " + (x * y));
        System.out.println("x / y = " + (x / y));
        System.out.println("x % y = " + (x % y));
        System.out.println("x^3 = " + (Math.pow(x, 3))); // 제곱연산자 사용, 결과는 실수

        System.out.println("====== 실수형 연산 ======");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b)); // 실제 나눗셈의 결과가 나온다
        System.out.println("a % b = " + (a % b));

        x = 10;
        System.out.println("증감연산자");
        System.out.println("++x " + ++x + ' ' + x); // 전위 증가: 증가 후 출력
        System.out.println("x++ " + x++ + ' ' + x); // 후위 증가: 출력 후 증가
        System.out.println("--x " + --x + ' ' + x);
        System.out.println("x-- " + x-- + ' ' + x);

        System.out.println("==산술 대입 연산자==");
        System.out.println(x);
        System.out.println("x +=5: " + (x += 5));
        System.out.println("x -=5: " + (x -= 5));
        System.out.println("x *=5: " + (x *= 5));
        System.out.println("x /=5: " + (x /= 5));
        System.out.println("x %=5: " + (x %= 5));

        System.out.println("논리 연산자, 연산 결과: boolean");
        // or and not
        boolean j = true;
        boolean k = false;
        boolean l = true;
        System.out.println("j && k: " + (j && k));
        System.out.println("j && l: " + (j && l));
        System.out.println("j or k: " + (j || k));
        System.out.println("!j: " + !j);

        // 삼항 연산자
        System.out.println("삼항 연산자");
        System.out.println(x > y ? "x가 y보다 큼" : "x가 y랑 같거나 작음"); // 현재 x 0 y 3


    }
}
