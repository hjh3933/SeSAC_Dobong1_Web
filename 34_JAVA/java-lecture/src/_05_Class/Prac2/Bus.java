package _05_Class.Prac2;

public class Bus extends Vehicle {
    private int passengerCapacity;

    public Bus(String brand, String model, int year, int passengerCapacity) {
        super(brand, model, year);
        this.passengerCapacity = passengerCapacity;
    }

    @Override
    public void vehicleAction() {
        System.out.println("승객을 운송합니다.");
    }

    @Override
    public void vehicleDetails() {
        System.out.println("Bus {brand=" + getBrand() + ", model=" + getModel() + ", year=" + getYear() + "passengerCapacity=" + this.passengerCapacity + "}");
    }
}


