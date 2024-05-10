package _01_basicPractice;

import java.util.Scanner;

public class Practice2 {
    public static void main(String[] args) {
        System.out.println("나이를 입력하세요");
        Scanner scan = new Scanner(System.in);
        int age = scan.nextInt();
        if(1<=age&&age<=7) {
            System.out.println("유아");
        } else if (8<=age&&age<=13) {
            System.out.println("초등학생");
        } else if (14<=age&&age<=16) {
            System.out.println("중학생");
        }  else if (17<=age&&age<=19) {
            System.out.println("고등학생");
        }  else if (20<=age) {
            System.out.println("성인");
        } else {
            System.out.println("잘못된 입력");
        }
    }
}
