package _05_Class.Prac2;

import java.util.ArrayList;
import java.util.List;

public class ShapeEx {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle("red", "Circle", 5));
        shapes.add(new Rectangle("blue", "Rectangle", 5, 7));

        for (int i = 0; i < shapes.size(); i++) {
            System.out.println("=== " + shapes.get(i).getType() + " 도형의 정보 ===");
            shapes.get(i).getColor();
            shapes.get(i).calculateArea();
        }

    }
}
