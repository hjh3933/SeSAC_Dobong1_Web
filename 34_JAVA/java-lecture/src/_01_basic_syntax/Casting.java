package _01_basic_syntax;
// ctrl + shift f10 = 현재 열린파일 기준
// 형변환

public class Casting {

    public static void main(String[] args) {
        // 1. 묵시적 형변환
        /*
         * 더 작은 타입에서 큰 타입으로 "자동변환"
         * */
        int smallNumber = 10;
        System.out.println("small Number(int): " + smallNumber);
        double bigNumber = smallNumber;
        System.out.println("big Number(double): " + bigNumber);

        // 2. 명시적 형변환
        /* 더 큰타입에서 더 작은타입으로 "강제 변환" */
        double anotherBigNumber = 20.8;
        int anotherSmallNumber = (int) anotherBigNumber;
        System.out.println("anotherBigNumber " + anotherBigNumber);
        System.out.println("anotherSmallNumber " + anotherSmallNumber); // 소수점 절삭된다(강제 형변환은 데이터 유실가능성)

        int largeNumber = 1000;
        // byte smallByte = largeNumber; 불가능
        byte smallByte = (byte) largeNumber; // (변환형) 데이터 손실이 일어날 수 있음
        System.out.println("largeNumber " + largeNumber);
        System.out.println("smallByte " + smallByte); // -24출력??

    }
}
