package _05_Class.d_inheritance;

public class Dog extends Animal {

    // 어노테이션 생략가능
    // 오버라이딩할 때는 함수의 이름, 반환 타입, 인자의 개수와 타입 등이 모두 같아야함
    @Override
    void makeSound(String t) {
        System.out.print(super.name + " "); // 부모 필드접근
        super.makeSound(t); // 멍멍, 부모 메소드 호출
    }

    void fetch() {
        System.out.println("공 가져와!");
    }

    /*
     * Overriding: 상속이 일어났을 때 부모와 자식 클래스 사이에서 메소드를 재정의하는 것
     * - 부모 메소드 재정의시, 내용의 일부만 변경되더라도 처음부터 다시 정의
     * - 이 때, super를 이용하면 내용을 그대로 가져올 수 있다.
     * */
}
