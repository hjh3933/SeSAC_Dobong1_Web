package _03_array;

import java.util.Arrays;
import java.util.Collections;

public class ArrayEx {
    public static void main(String[] args) {
        // 배열 선언
        // 1. 타입[] 변수이름; <- 관례적으로 많이 사용
        // 2. 타입 변수이릅[];
        int[] arr1;
        int arr2[];

        // reference타입만 null로 초기화가 가능(기본형은 불가)
        // String[] temp = null;
        // System.out.println(temp[0]);

        int[] intArray = {10, 22, 52, 91, 5};
        System.out.println("intArray[0]번 인덱스: " + intArray[0]); // 인덱스의 값
        System.out.println("intArray: " + intArray); // 주소값
        intArray[1] = 20;
        System.out.println("intArray: " + Arrays.toString(intArray)); // 실제로 변경이 됩니다 [10, 20, 52, 91, 5]

        char[] charArray;
        // charArray = {'A', 'a'}; compile error. 선언 시 초기화 안했을 때
        charArray = new char[]{'A', 'a', '2', 66}; // new char[]를 붙여야 초기화 가능
        System.out.println(charArray[2]); // 2
        System.out.println(charArray[3]); // B(ascii 코드)

        //
        double[] doubleArray = new double[3];
        System.out.println(Arrays.toString(doubleArray)); //[0.0, 0.0, 0.0]
        // 따로 초기화하지 않았지만 기본적으로 0.0으로 초기화됨(new로 생성했을때만!!!)
        doubleArray[0] = 0.1;
        doubleArray[1] = 0.5;
        doubleArray[2] = 0.7;
        // doubleArray[3] = 0.8; ArrayIndexOutOfBoundsException 에러 배열
        System.out.println(Arrays.toString(doubleArray)); // 초기화 잘 된다 [0.1, 0.5, 0.7]

        // 다차원배열 - 배열 안에 배열있어요
        // 배열 생성과 초기화 2, 3
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}};
        System.out.println("2차원 배열1: " + matrix[0][0]); // 2차원 배열: [[I@378bf509, [I@5fd0d5ae]

        // 배열 생성과 초기화 3, 2
        int[][] matrix2 = new int[3][2];
        System.out.println("2차원 배열2: " + matrix2[0][0]); // new int로 생성해서 기본값으로 초기화된 상태
        matrix2[0][0] = 1;
        matrix2[0][1] = 2;
        matrix2[1][0] = 3;
        matrix2[1][1] = 4;
        matrix2[2][0] = 5;
        matrix2[2][1] = 6;

        for (int i = 0; i < matrix2.length; i++) {
            for (int j = 0; j < matrix2[i].length; j++) {
                System.out.println("matrix2[i][j]: " + matrix2[i][j]);
            }
        }

        // 객체를 참조하는 배열
        String[] langs = new String[3];
        System.out.println(Arrays.toString(langs));
        langs[0] = "java";
        langs[1] = "java";
        langs[2] = new String("java");
        System.out.println(Arrays.toString(langs));
        System.out.println(langs[0] == langs[1]); // 두 요소 모두 리터럴 방식, true -> 주소 비교
        System.out.println(langs[0] == langs[2]); // 리터럴 방식과 객체 방식 비교, false -> 주소 비교
        System.out.println(langs[0].equals(langs[2])); // true -> 내용 비교

        // 배열 복사
        // - 배열은 초기화/선언과 동시에 크기가 고정됨
        // - 더 많은 저장공간이 필요할 때, 더 큰 길이의 배열을 "새로" 만들어 기존 배열을 복사한다!

        int[] originArray = {1, 2, 3};
        int[] newArray = new int[5]; // 기존 배열의 크기를 키우기 위해서 새로운 배열 선언
        System.out.println(Arrays.toString(newArray));
        // ver1. for문 사용
        for (int i = 0; i < originArray.length; i++) {
            newArray[i] = originArray[i];
        }
        System.out.println("after copy: " + Arrays.toString(newArray));

        // ver2. 기본 메서드 arrayCopy() 사용
        // System.arrayCopy(src, srcPos, dest, destPos, length);
        /*
         * Object src: 원본 배열(originArray)
         * int srcPos: 원본 배열의 복사 시작 인덱스(0번부터 아니어도 됨)
         * Object dest: 새로운 배열(newArray)
         * int destPos: 새로운 배열의 붙여넣기 시작 인덱스(0번부터 아니어도 됨)
         * int length: 복사할 항목 개수
         * */
        String[] originFruits = {"apple", "banana", "coconut"};
        String[] newFruits = new String[5];

        System.out.println(Arrays.toString(newFruits));
        // System.arraycopy(originFruits, 0, newFruits, 0, originFruits.length);
        // System.arraycopy(originFruits, 0, newFruits, 0, originFruits.length - 1);
        System.arraycopy(originFruits, 1, newFruits, 2, originFruits.length - 1);
        //[null, null, banana, coconut, null]
        System.out.println("after copy: " + Arrays.toString(newFruits));

        // Arrays 내장 메소드 확인
        // Arrays import 필수!!!!
        // 1. Arrays.copyOf(arr, length): 처음부터 지정한 길이만큼 복사
        int[] originArr = {1, 2, 3, 4, 5};
        int[] copieArr = Arrays.copyOf(originArr, 3);
        int[] copieArr2 = Arrays.copyOf(originArr, 8);
        System.out.println("copiedArr >> " + Arrays.toString(copieArr));
        System.out.println("copiedArr2 >> " + Arrays.toString(copieArr2)); // [1, 2, 3, 4, 5, 0, 0, 0]

        // 2. Arrays.copyOfRange(arr, startIndex, endIndex): endIndex 앞까지 복사
        int[] rangeArray = Arrays.copyOfRange(originArr, 1, 4); // [2,3,4]
        System.out.println("Range array >> " + Arrays.toString(rangeArray));

        // 3. Arrays.fill(arr, val): arr의 모든 요소를 val로 채워준다
        int[] filledArr = new int[5];
        Arrays.fill(filledArr, 10);
        System.out.println("after fill: " + Arrays.toString(filledArr));

        // 4. Arrays.sort(arr): arr을 오름차순으로 정렬
        int[] unsortedArray = {5, 2, 6, 9, 499, 1, 3};
        // Collections을 사용하기 위해 Integer 참조형을 사용해야한다
        Integer[] unsortedArray2 = {5, 2, 6, 9, 499, 1, 3};
        Arrays.sort(unsortedArray);
        Arrays.sort(unsortedArray2, Collections.reverseOrder()); // 내림차순 정렬 가능
        System.out.println("atter sort: " + Arrays.toString(unsortedArray)); //[1, 2, 3, 5, 6, 9, 499]
        System.out.println("reverse sort: " + Arrays.toString(unsortedArray2)); //[499, 9, 6, 5, 3, 2, 1]

        // 5. Arrays.equals(arr1, arr2): 요소가 일치하는지 검사(주소X)
        int[] array1 = {1, 2, 3};
        int[] array2 = {1, 2, 3};
        int[] array3 = {1, 2, 4};
        // ==등호비교
        System.out.println("==비교: " + (array1 == array2)); // false 주소 비교
        System.out.println("==비교: " + (array1 == array3)); // false 주소 비교
        // equals로 비교: 배열의 순서대로 값 비교
        System.out.println("equals비교: " + Arrays.equals(array1, array2)); // true
        System.out.println("equals비교: " + Arrays.equals(array1, array3)); // false

        // 6. Arrays.deepEquals(arr1, arr2)
        // vs Arrays.equals()?
        // 배열의 요소가 값이 아닌 주소로 비교해야 될 때
        int[][] deepArr1 = {{1, 2}, {3, 4}};
        int[][] deepArr2 = {{1, 2}, {3, 4}};
        int[][] deepArr3 = {{1, 2}, {3, 5}};
        System.out.println("=======================================================");
        // 배열안에 object가 있으면 주소값을 값으로 비교해버려서 제대로 비교가안됨;;
        System.out.println("equals비교: " + Arrays.equals(deepArr1, deepArr2)); // false
        System.out.println("deepEquals비교: " + Arrays.deepEquals(deepArr1, deepArr2)); // true
        System.out.println("deepEquals비교: " + Arrays.deepEquals(deepArr1, deepArr3)); // false

        // 7. binarySearch(arr, val): 인덱스를 찾아준다. 이 때의 arr는 정렬되어 있어야 함
        // 오름차순/내림차순 상관 없음
        int[] sortedArray = {10, 21, 35, 49, 57};
        int index = Arrays.binarySearch(sortedArray, 35);
        int index2 = Arrays.binarySearch(sortedArray, 60);
        System.out.println("35의 index: " + index); // 2
        System.out.println("존재하지 않는 60의 index: " + index2); //-6(-6 고정이 X 무작위 음수값 반환)

        System.out.println();
    }
}
