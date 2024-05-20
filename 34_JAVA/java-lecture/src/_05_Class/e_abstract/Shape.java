package _05_Class.e_abstract;

// abstract public class Shape {
public abstract class Shape {
    private String color;

    public Shape(String color) {
        this.color = color;
    }

    //     일반 메소드
    void start() {
        System.out.println("도형을 그려보자!");
    }

    String getColor() {
        return this.color;
    }

    // 실행문{} 아예 없음 선언만 하고, 자식이 구현 Overriding
    // -> 모든 자식 클래스에서 공통적으로 사용할 예정인 함수지만, 구현부가 모두 다를 때 사용
    abstract void draw();
}
