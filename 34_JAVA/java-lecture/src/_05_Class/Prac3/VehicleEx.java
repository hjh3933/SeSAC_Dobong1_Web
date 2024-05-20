package _05_Class.Prac3;

public class VehicleEx {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Car();
        vehicles[1] = new Airplane();

        for (int i = 0; i < vehicles.length; i++) {
            vehicles[i].move();
            if (vehicles[i] instanceof Airplane) {
                ((Airplane) vehicles[i]).fly();
            }
        }
    }
}
