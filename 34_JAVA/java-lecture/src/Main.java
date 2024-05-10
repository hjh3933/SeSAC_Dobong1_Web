import java.util.Arrays;

public class Main {
    /*
    * 자바는 기본적으로 클래스단위
    * 클래스 첫글자는 대문자 관례
    * 소스파일명과 클래스명 반드시 일치
    * */
    // shift + f10: build and run
    // 주석
    /* 여러줄 주석 ctrl + shift + / */
    public static void main(String[] args) {
        // public: 접근제한자
        // static: JVM이 main 함수를 바로 실행하도록
        // void: 함수의 리턴타입
        // main: 함수의 이름
        System.out.println("Hello world!");
        System.out.println(args.length);
        System.out.println(Arrays.toString(args));
    }
}