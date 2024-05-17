package _04_Exception;

import java.util.*;

public class Practice0517 {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4};
        try {
            for (int i = 0; i <= numbers.length + 1; i++) {
                System.out.println(numbers[i]);
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("인덱스가 범위를 벗어났습니다.");
        }

        Scanner scan = new Scanner(System.in);
        // try {
        //     System.out.println("배열 크기를 정수로 입력해주세요");
        //     int[] numbers2 = new int[scan.nextInt()];
        //     System.out.println("배열의 요소를 정수 " + numbers2.length + "개 입력해주세요");
        //     for (int i = 0; i < numbers2.length; i++) {
        //         numbers2[i] = scan.nextInt();
        //     }
        //     int sum = 0;
        //     for (int i = 0; i < numbers2.length; i++) {
        //         sum += numbers2[i];
        //     }
        //     double avg = (double) sum / (double) numbers2.length;
        //     System.out.println("배열의 평균은: " + avg);
        // } catch (InputMismatchException e) {
        //     // 정수가 아닌 값 입력
        //     System.out.println("정수를 입력해주세요");
        // }

        try {
            System.out.println("배열 크기를 정수로 입력해주세요");
            int size = scan.nextInt();
            // IllegalArgumentException는 음수일 때만 오류가 발생하는데 나는 0을 포함해서 일부로 오류를 발생시킨 것임
            if (size <= 0) {
                throw new IllegalArgumentException("배열의 크기는 1 이상이어야 합니다.");
            }
            int[] numbers3 = new int[size];

            System.out.println("배열의 요소를 " + numbers3.length + "개 입력해주세요");
            for (int i = 0; i < numbers3.length; i++) {
                System.out.print("정수 " + (i + 1) + ": ");
                numbers3[i] = scan.nextInt();
            }
            List<Integer> numnum = new ArrayList<Integer>();
            // 중복 검사
            for (int i = 0; i < numbers3.length - 1; i++) {
                for (int j = i + 1; j < numbers3.length; j++) {
                    if (numbers3[i] == numbers3[j] && !numnum.contains(numbers3[i])) {
                        // 없으면 추가
                        numnum.add(numbers3[i]);
                    }
                }
            }
            if (numnum.isEmpty()) {
                System.out.println("중복된 요소가 없어요");
            } else {
                System.out.println("중복요소" + numnum);
            }
        } catch (InputMismatchException e) {
            // 정수가 아닌 값 입력
            System.out.println("정수를 입력해주세요");
        } catch (IllegalArgumentException e) {
            System.out.println(e.toString());
        } finally {
            scan.close();
        }
    }
}
