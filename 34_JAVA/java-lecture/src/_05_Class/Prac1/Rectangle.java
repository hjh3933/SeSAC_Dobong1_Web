package _05_Class.Prac1;

public class Rectangle {
    private int width;
    private int heigth;

    public Rectangle(int width) {
        this.width = width;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeigth() {
        return heigth;
    }

    public void setHeigth(int heigth) {
        this.heigth = heigth;
    }

    public int area() {
        return width * heigth;
    }
}
