package _05_Class.Prac2;

public class Motocycle extends Vehicle {
    private char licenseType;

    public Motocycle(String brand, String model, int year, char licenseType) {
        super(brand, model, year);
        this.licenseType = licenseType;
    }

    @Override
    public void vehicleAction() {
        System.out.println("울림통을 합니다.");
    }

    @Override
    public void vehicleDetails() {
        System.out.println("Motocycle {brand=" + getBrand() + ", model=" + getModel() + ", year=" + getYear() + "licenseType=" + this.licenseType + "}");
    }
}
