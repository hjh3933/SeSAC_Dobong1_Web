package _05_Class.Prac2;

public class Vehicle {
    private String brand;
    private String model;
    private int year;

    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public void vehicleDetails() {
    }

    public void powerOn() {
        System.out.println("차량 시동을 걸었습니다.");
    }

    public void powerOff() {
        System.out.println("차량을 정지했습니다.");
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public void vehicleAction() {
    }
}
