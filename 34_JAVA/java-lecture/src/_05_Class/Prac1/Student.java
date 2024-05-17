package _05_Class.Prac1;

public class Student {
    private String name;
    private int student_ID;
    private int grade;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStudent_ID() {
        return student_ID;
    }

    public void setStudent_ID(int student_ID) {
        this.student_ID = student_ID;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public static int totalStudents = 0;

    public Student(String name, int student_ID, int grade) {
        this.name = name;
        this.student_ID = student_ID;
        this.grade = grade;
        // 학생수 증가
        totalStudents++;
    }

    public static void displayInfo() {
        System.out.println("총 학생 수는 " + totalStudents + "명 입니다.");
    }

    public static void main(String[] args) {
        Student s1 = new Student("김새싹", 20231001, 1);
        Student s2 = new Student("박지은", 20231002, 2);
        Student s3 = new Student("이은지", 20231003, 3);

        System.out.println("=== 학생 정보 ===");
        System.out.println("이름: " + s1.getName());
        System.out.println("학번: " + s1.getStudent_ID());
        System.out.println("학년: " + s1.getGrade());
        System.out.println();
        System.out.println("=== 학생 정보 ===");
        System.out.println("이름: " + s2.getName());
        System.out.println("학번: " + s2.getStudent_ID());
        System.out.println("학년: " + s2.getGrade());
        System.out.println();
        System.out.println("=== 학생 정보 ===");
        System.out.println("이름: " + s3.getName());
        System.out.println("학번: " + s3.getStudent_ID());
        System.out.println("학년: " + s3.getGrade());
        displayInfo();
    }
}
