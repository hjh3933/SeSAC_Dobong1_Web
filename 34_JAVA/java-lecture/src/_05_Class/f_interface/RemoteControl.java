package _05_Class.f_interface;

public interface RemoteControl {
    // interface는 추상 메소드를 포함해야 합니다.

    // 추상메소드만 가지기 때문에 abstract 키워드 생략 가능
    // 추상 클래스에서는 생략 불가
    public void turnOn();

    public void turnOff();

    public void setVolume(int volume);

    // 상수 필드 - 생략해도 컴파일러가 자동으로 static final 추가, 상수 필드만 선언 가능
    int MAX_VOLUME = 10;
    static final int MIN_VOLUME = 0;
}
