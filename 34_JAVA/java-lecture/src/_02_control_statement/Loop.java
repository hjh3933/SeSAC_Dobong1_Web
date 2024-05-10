package _02_control_statement;

import java.util.ArrayList;
import java.util.List;

public class Loop {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }

        int i = 1;
        System.out.println("while문");
        while (i <= 10) {
            System.out.println(i);
            i++;
        }
        // do-while문: 적어도 한번은 실행되는 반복문(조건 미충족시에도 최초 1회 실행)
        System.out.println("do-while문");
        int j = 1;
        do {
            System.out.println(j);
            j++;
        } while (j <= 10); // 나중에 조건검사

        // 배열과 for문
        // for each문
        String[] arr = {"A", "B", "C"}; // string타입 배열
        // for(타입 변수명: 배열명)
        for (String str : arr) {
            System.out.println("str: " + str);
        }

        // arrayList
        List<String> list = new ArrayList<String>(); // 리스트 중에 array list
        list.add("A"); // 추가하는 법 add()
        list.add("B");
        list.add("C"); // list = ["A","B","C"]

        for (String str : list) {
            System.out.println("list: " + str);
        }

        // foreach with lamda (익명함수! ()-> {})
        list.forEach(data -> System.out.println("data: " + data));
    }
}
