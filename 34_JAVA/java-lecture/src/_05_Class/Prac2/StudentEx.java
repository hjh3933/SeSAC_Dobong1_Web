package _05_Class.Prac2;

public class StudentEx {
    public static void main(String[] args) {
        Kim kim = new Kim("김철수", "ABC 고등학교", 17, 20220001);
        Baek baek = new Baek("백영희", "XYZ 고등학교", 18, 20220002);

        System.out.println("==== " + kim.getName() + " 학생의 정보 ====");
        System.out.println("학교: " + kim.getSchool());
        System.out.println("나이: " + kim.getAge());
        System.out.println("학번: " + kim.getStudentNumber());
        kim.todo();
        System.out.println("==== " + baek.getName() + " 학생의 정보 ====");
        System.out.println("학교: " + baek.getSchool());
        System.out.println("나이: " + baek.getAge());
        System.out.println("학번: " + baek.getStudentNumber());
        baek.todo();
    }
}
