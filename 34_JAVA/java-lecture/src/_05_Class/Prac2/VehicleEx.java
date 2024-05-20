package _05_Class.Prac2;


public class VehicleEx {
    public static void main(String[] args) {
        Bus bus = new Bus("Hyundai", "City Bus", 2022, 30);
        Car car = new Car("Toyota", "Camry", 2023, true);
        Motocycle moto = new Motocycle("Harley-Davidson", "Sportster", 2021, 'A');
        System.out.println("===Bus 정보===");
        bus.vehicleDetails();
        bus.powerOn();
        bus.vehicleAction();
        bus.powerOff();
        System.out.println("===Car 정보===");
        car.vehicleDetails();
        car.powerOn();
        car.vehicleAction();
        car.powerOff();
        System.out.println("===Motocycle 정보===");
        moto.vehicleDetails();
        moto.powerOn();
        moto.vehicleAction();
        moto.powerOff();
    }
}
