package _05_Class.Prac2;

public abstract class Shape {
    private String color;
    private String type;

    public Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    public abstract void calculateArea();

    public void getColor() {
        System.out.println("도형의 색상: " + this.color);
    }

    public String getType() {
        return this.type;
    }
}
