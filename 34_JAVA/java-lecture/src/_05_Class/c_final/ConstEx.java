package _05_Class.c_final;

public class ConstEx {
    public static void main(String[] args) {
        System.out.println(Const.MAX_VALUE);
        System.out.println(Const.GREETING);
        // Const.MAX_VALUE = 200; //final이기 때문에 재할당 불가

        Const.MIN_VALUE = 10;
        System.out.println(Const.MIN_VALUE); // 그냥 static 변수는 변경 가능

        // final변수 접근
        // System.out.println(Const.name); static이 아닌 멤버는 객체 생성해야 접근가능
        Const c1 = new Const();
        System.out.println(c1.name);
        // c1.name = "juhee"; final 변경 불가
    }
}
