package _03_array;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Practice0513 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // System.out.println("5개의 정수를 입력하세요");
        // int[] numbers = new int[5];
        // double sum = 0;
        // for (int i = 0; i < numbers.length; i++) {
        //     numbers[i] = scan.nextInt();
        //     sum += numbers[i];
        // }
        // System.out.println("평균은 " + (double) (sum / 5));

        System.out.println("============================");
        List<String> chats = new ArrayList<>();

        String chat = "";
        while (true) {
            System.out.println("문자를 입력해주세요");
            chat = scan.next();
            if (chat.equals("exit")) break;
            chats.add(chat);
        }
        System.out.println(chats);
    }
}
