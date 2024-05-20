package _05_Class.f_interface.interfaceEx;

interface Move {
    void moveForward();

    void moveBackward();
}

interface Power {
    void PowerOn();

    void PowerOff();
}

// interface 간의 상속
// extends 사용(implements: 클래스가 인터페이스를 구현할 때)
// 다중 상속 가능 ,콤마로 구분
interface Car extends Move, Power {
    void changeGear(int gear);
}

class Suv implements Car {
    @Override
    public void moveForward() {
        System.out.println("전진");

    }

    @Override
    public void moveBackward() {
        System.out.println("후진");

    }

    @Override
    public void PowerOn() {
        System.out.println("시동 On");
    }

    @Override
    public void PowerOff() {
        System.out.println("시동 Off");

    }

    @Override
    public void changeGear(int gear) {
        System.out.println("기어변경: " + gear);

    }
}

public class InterfaceEx01 {
    public static void main(String[] args) {
        Suv s1 = new Suv();
        s1.PowerOn();   // power interface
        s1.moveBackward();  // move interface
        s1.changeGear(2);   // car interface
    }
}
