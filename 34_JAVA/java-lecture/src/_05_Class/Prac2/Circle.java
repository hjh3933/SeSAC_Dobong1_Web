package _05_Class.Prac2;

public class Circle extends Shape {
    private int radius;
    private static final double pi = Math.PI;

    public Circle(String color, String type, int radius) {
        super(color, type);
        this.radius = radius;
    }

    public int getRadius() {
        return radius;
    }

    @Override
    public void calculateArea() {
        double area = (double) (this.radius * this.radius) * pi;
        System.out.println("도형의 넓이: " + area);
    }
}
