package _05_Class;
// Student Class 사용

public class StudentEx {
    public static void main(String[] args) {
        Student s1 = new Student("juhee", 1);
        /*
         * s1={
         *   name="juhee",
         *   grade=1,
         *   ... 하위 메소드들
         * }
         * */
        System.out.println(s1); // _05_Class.Student@3b07d329 패키지.클래스명@주소 -> toString 재정의 후 toString으로 자동 호출되는 중
        System.out.println(s1.toString()); // Student {name="juhee", grade=1}

        // void
        s1.goToSchool();
        s1.study("JAVA");

        // return O
        System.out.println(s1.getGrade());
        System.out.println(s1.getTestResult(95));

        Student s2 = new Student("jisu", 2);
        System.out.println(s2);
        System.out.println("s2인스턴스의 이름: " + s2.name);
        System.out.println("s2인스턴스의 학년: " + s2.grade);
        
    }
}
