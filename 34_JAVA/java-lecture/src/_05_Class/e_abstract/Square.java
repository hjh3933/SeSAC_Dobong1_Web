package _05_Class.e_abstract;

public class Square extends Shape {
    private String type; // 정사각형, 직사각형, 마름모, ... 사각형의 종류

    public Square(String type, String color) {
        super(color);
        // type의 setter를 통해 type값 초기화
        setType(type);
    }

    @Override
    void draw() {
        System.out.println(type + " 그리기");
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    //     square만의 추가 메소드
    void showType() {
        System.out.printf("사각형의 종류는 %s 입니다!! %n", type);
    }
}
