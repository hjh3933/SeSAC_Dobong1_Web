package _05_Class.Prac2;

public class Car extends Vehicle {
    private boolean convertible;

    public Car(String brand, String model, int year, boolean convertible) {
        super(brand, model, year);
        this.convertible = convertible;
    }

    @Override
    public void vehicleAction() {
        System.out.println("주차했습니다.");
    }

    @Override
    public void vehicleDetails() {
        System.out.println("Car {brand=" + getBrand() + ", model=" + getModel() + ", year=" + getYear() + "convertible=" + this.convertible + "}");
    }
}