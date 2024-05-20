package _05_Class.d_inheritance;

import _05_Class.a_access_modifier.pack3.A;

public class DogEx {
    public static void main(String[] args) {
        Dog dog1 = new Dog();
        dog1.sayHello();    // Animal
        dog1.fetch();   // Dog
        System.out.println("----dog class makeSound----");
        // Overriding
        dog1.makeSound("멍멍!");

        //     부모 클래스로 인스턴스 생성
        Animal cat = new Animal();
        System.out.println("----animal class makeSound----");
        cat.makeSound("야옹");
    }

}
