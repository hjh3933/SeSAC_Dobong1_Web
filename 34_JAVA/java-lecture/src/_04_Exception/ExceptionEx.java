package _04_Exception;

// - Error: 시스템이 비정상적인 상황
// - 코드에 의해 수습할 수 없는 심각한 오류
// - OutOfMemoryError, ThreadDeath, ..

import java.util.InputMismatchException;
import java.util.Scanner;

/*
 * 일반예외(Exception, checked Exception), 실행예외(Runtime Exception/unchecked Exception)
 * - 일반 예외
 *   - 확인 시점: 컴파일 시점, 명시적으로 예외 처리 반드시 해야함
 *   - IOException, FileNotFoundException
 * - 실행 예외
 *   - 확인 시점: 런타임 시점, 예외처리를 강제하지 않지만 프로그램의 정상적인 작동을 위해 예외처리를 해주는게 좋다
 *   - NullPointerException, InputMismatchException
 * */
public class ExceptionEx {

    public static String divide(int x, int y) {
        return x + " / " + y + " = " + (x / y);
    }

    public static int getLength(String str) {
        return str.length();
    }

    public static int getValueByIdx(int[] arr, int idx) {
        return arr[idx];
    }

    public static void main(String[] args) {
        System.out.println(divide(6, 2));
        // System.out.println(divide(6, 0));
        // System.out.println("여기까지 나올까요?");   // 실행 X

        // ##### case1. 0으로 나누기(ArithmeticException)
        try {
            System.out.println("나누기 연산 시작!");
            System.out.println(divide(6, 0));

        } catch (ArithmeticException error) {
            //   catch의 error 부분에는 어떤 에러인지도 명시

            // 방법1: e.getMessage(): 예외가 발생한 이유만 보여줌
            System.out.println("나누기 중 예외 발생" + error.getMessage()); // -> / by zero
            // 방법2: e.toString(): 예외 종류를 리턴
            System.out.println("나누기 중 예외 발생" + error.toString()); // -> java.lang.ArithmeticException: / by zero
        } finally {
            System.out.println("나누기 연산 종료");
        }

        //  ###### case2. null에 접근(NullPointerException)
        try {
            System.out.println(getLength("hello"));
            System.out.println(getLength(null));
        } catch (NullPointerException e) {
            System.out.println("단어 길이 연산 중 에러 발생" + e.getMessage()); // Cannot invoke "String.length()" because "str" is null
            System.out.println("단어 길이 연산 중 에러 발생" + e.toString()); // java.lang.NullPointerException: Cannot invoke "String.length()" because "str" is null
        }

        // ##### case3. index값으로 배열 접근시 범위에 없는 값으로 접근(ArrayIndexOutOfBoundsException)
        int[] numbers = {10, 20, 30, 40, 50};
        try {
            System.out.println(getValueByIdx(numbers, 2));
            System.out.println(getValueByIdx(numbers, numbers.length));
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열 인덱싱 중 예외 발생" + e.getMessage()); // Index 5 out of bounds for length 5
            System.out.println("배열 인덱싱 중 예외 발생" + e.toString());
        }

        // ##### case4. 입력 형식 예외()
        Scanner scan = new Scanner(System.in);
        try {
            System.out.println("정수를 하나 입력해주세요");
            int number = scan.nextInt(); // 정수가 아닌 값이 들어오면 오류발생
            System.out.println("입력한 정수: " + number);
        } catch (InputMismatchException e) {
            System.out.println("정수 입력 중 예외 발생" + e.getMessage()); // Index 5 out of bounds for length 5
            System.out.println("정수 입력 중 예외 발생" + e.toString());
        }
    }
}

/*
 * try{}catch(예외이름 error){}finally{}
 * 1. catch 여러개 이어서 쓰기 가능합니다
 *   catch(예외이름1 error){}catch(예외이름2 error){}
 * 2. catch문 하나에 예외 여러개 받는 것 가능
 *   - catch(예외1 | 예외2 error)
 *   - 예외 처리 구문이 비슷할 때
 *   - 두 예외가 상속관계에 있지 않을 때
 * */
