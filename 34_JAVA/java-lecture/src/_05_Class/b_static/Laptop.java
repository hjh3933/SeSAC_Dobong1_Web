package _05_Class.b_static;

public class Laptop {
    static String company = "LG";
    static String model = "gram";
    static String info;

    static {
        // 정적 초기화 블록 - 여기서 초기화 가능, 복잡한 초기화 하고 하고싶을 때
        // 초기화 순서 제어하고 싶을 때
        // info=company+model;
        if (true) {
            info = company + model;
        } else {
            info = "LG 컴퓨터가 아닙니다.";
        }
    }

}
