package _05_Class.f_interface;

import _05_Class.a_access_modifier.pack3.A;

public class RemoteControlEX {
    public static void main(String[] args) {
        // Television tv = new Television();

        // 인터페이스 객체로 생성가능
        RemoteControl rc;
        rc = null;
        rc = new Television();
        rc.turnOn();
        rc.turnOff();
        rc.setVolume(5);

        // 하나의 interface 객체로 두 가지 클래스 대입해서 사용가능!
        System.out.println("===============");

        rc = new Audio();
        rc.turnOn();
        rc.turnOff();
        rc.setVolume(49);

    }
}
