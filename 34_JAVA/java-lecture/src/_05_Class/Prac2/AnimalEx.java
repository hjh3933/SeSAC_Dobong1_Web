package _05_Class.Prac2;


public class AnimalEx {
    public static void main(String[] args) {
        Animal animal = new Dog("강아지", "똘이", 3, "주희");
        animal.makeSound("멍멍");
        System.out.println("===================");
        animal = new Cat("고양이", "나비", 10, "지수");
        animal.makeSound("야옹");
    }
}
