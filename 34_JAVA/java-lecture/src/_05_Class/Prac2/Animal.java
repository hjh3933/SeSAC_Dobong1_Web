package _05_Class.Prac2;

public class Animal {
    private String type;
    private String name;
    private int age;

    public Animal(String type, String name, int age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void makeSound(String sound) {
        System.out.println("동물은 소리를 낸다");
        System.out.println(getName() + "가 " + sound + "소리를 냅니다.");
    }
}
