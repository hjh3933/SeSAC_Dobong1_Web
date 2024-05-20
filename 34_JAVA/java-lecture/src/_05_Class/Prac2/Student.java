package _05_Class.Prac2;

public abstract class Student {
    private String name;
    private String school;
    private int age;
    private int studentNumber;

    public Student(String name, String school, int age, int studentNumber) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.studentNumber = studentNumber;
    }

    public String getName() {
        return name;
    }

    public String getSchool() {
        return school;
    }

    public int getAge() {
        return age;
    }

    public int getStudentNumber() {
        return studentNumber;
    }

    public abstract void todo();
}
