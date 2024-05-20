package _05_Class.Prac2;

public class Cat extends Animal {
    private String owner;

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Cat(String type, String name, int age, String owner) {
        super(type, name, age);
        this.owner = owner;
    }

    @Override
    public void makeSound(String sound) {
        System.out.println(this.owner + "의 반려동물은 " + getName());
        super.makeSound(sound);
    }
}
