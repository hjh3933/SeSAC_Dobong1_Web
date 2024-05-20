package _05_Class.e_abstract;

public class ShapeEx {
    public static void main(String[] args) {
        Circle c1 = new Circle("red");
        c1.start(); // 추상 클래스의 일반 메소드
        c1.draw();  // 자식 클래스에서 구현된 추상 메소드
        System.out.println("원의 색상은 " + c1.getColor());

        System.out.println("==================================");

        Square s1 = new Square("정사각형", "blue");
        s1.start();
        s1.draw();
        s1.showType();
        System.out.println("사각형의 색상은 " + s1.getColor());
    }
}
