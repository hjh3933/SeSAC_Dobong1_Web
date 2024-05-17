package _05_Class.Prac1;

import java.util.Scanner;

public class CircleEx {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("원의 반지름을 입력하세요: ");
        double r = scan.nextDouble();
        Circle c = new Circle(r);
        System.out.println("원의 반지름: " + c.getRadius());
        System.out.println("원의 넓이: " + c.calculagteArea());
    }
}
