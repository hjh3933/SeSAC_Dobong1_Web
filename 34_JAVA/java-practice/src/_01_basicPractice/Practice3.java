package _01_basicPractice;

import java.util.Scanner;

public class Practice3 {
    public static void main(String[] args) {
        System.out.println("이름을 입력하세요");
        Scanner scan = new Scanner(System.in);
        String name = scan.next();
        switch (name) {
            case "홍길동":
                System.out.println("남자");
                break;
            case "성춘향":
                System.out.println("여자");
                break;
            default:
                System.out.println("모르겠어요");
                break;
        }
    }
}
