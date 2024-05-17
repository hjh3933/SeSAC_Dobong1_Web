package _05_Class.a_access_modifier.pack5;

public class Person {
    //     1. 필드: age, name
    //     2. 생성자(int age, String name)
    //     3. 모든 필드에 대한 getter, setter
    private int age;
    private String name;

    public Person(int age, String name) {
        this.age = age;
        this.name = name;
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
        // 필드에 직접 접근하면 이런 예외처리는 불가능
        if (age < 0) {
            this.age = 0;
            return;
        } else {
            this.age = age;
        }
    }

}
