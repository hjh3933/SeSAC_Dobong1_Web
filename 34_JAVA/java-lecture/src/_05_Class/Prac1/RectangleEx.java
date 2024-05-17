package _05_Class.Prac1;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class RectangleEx {
    public static void main(String[] args) {
        List<Rectangle> rectangles = new ArrayList<Rectangle>();
        Scanner scan = new Scanner(System.in);
        int width;
        int height;
        for (int i = 0; i >= 0; i++) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요");
            width = scan.nextInt();
            height = scan.nextInt();
            if (width == 0 && height == 0) {
                break;
            }
            rectangles.add(new Rectangle(width));
            rectangles.get(i).setHeigth(height);
        }
        for (int i = 0; i < rectangles.size(); i++) {
            System.out.print("가로길이는: " + rectangles.get(i).getWidth());
            System.out.println();
            System.out.print("세로길이는: " + rectangles.get(i).getHeigth());
            System.out.println();
            System.out.println("넓이는: " + rectangles.get(i).area());
            System.out.println();
        }
        System.out.println("Rectangle 인스턴스의 개수는: " + rectangles.size());

    }
}
