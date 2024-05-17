package _05_Class.Prac1;

public class Circle {
    private final double pi = Math.PI;
    private final double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double calculagteArea() {
        return radius * radius * pi;
    }

    public double getRadius() {
        return radius;
    }
}
