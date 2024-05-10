package _02_control_statement;

import java.util.Scanner;

public class Practice0513 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("숫자를 입력하세요");
        int number = scan.nextInt();
        for (int i = 1; i <= number; i++) {
            System.out.print(i + " ");
        }

        System.out.println("===========2=============");
        System.out.println("숫자 2개를 입력하세요");
        double x = scan.nextInt();
        double y = scan.nextInt();

        System.out.println("덧셈 결과 : " + sum(x, y));
        System.out.println("뺄셈 결과 : " + minus(x, y));
        System.out.println("나눗셈 결과 : " + divide(x, y));
        System.out.println("곱셈 결과 : " + multi(x, y));

        System.out.println("===========3=============");
        // 변수
        double r = 5;
        double w = 4;
        double h = 7;
        int a = 6;
        int b = 3;
        System.out.println("반지름이 5인 원의 넓이: " + calc(r));
        System.out.println("가로 4, 세로 7인 직사각형의 넓이: " + calc(w, h));
        System.out.println("밑변 6, 높이 3인 삼각형의 넓이: " + calc(a, b));
    }

    public static double sum(double x, double y) {
        return x + y;
    }

    public static double minus(double x, double y) {
        return x - y;
    }

    public static double divide(double x, double y) {
        return x / y;
    }

    public static double multi(double x, double y) {
        return x * y;
    }

    public static double calc(double x) {
        return x * x * Math.PI;
    }

    public static double calc(double x, double y) {
        return x * y;
    }

    public static double calc(int x, int y) {
        return (x * y) / 2;
    }
}
