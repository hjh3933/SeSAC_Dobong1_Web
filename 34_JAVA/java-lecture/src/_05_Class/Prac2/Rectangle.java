package _05_Class.Prac2;

public class Rectangle extends Shape {
    private int width;
    private int height;

    public Rectangle(String color, String type, int width, int height) {
        super(color, type);
        this.width = width;
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    @Override
    public void calculateArea() {
        double area = this.width * this.height;
        System.out.println("도형의 넓이: " + area);
    }
}
