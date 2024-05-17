package _05_Class;
// 패키지? 여러 클래스를 가지고 있는 디렉토리(클래스 중복, 접근제한과 관련된 구분 개념)
// 클래스를 유일하게 만들어주는 식별자

public class Student {
    //     1. 클래스의 필드
    public String name;
    public int grade;

    //     2. 클래스의 메소드
    //     2-1 클래스의 생성자
    public Student(String name, int gr) {
        // 생성자의 인자를 이용해서 클래스의 필드를 초기화할 수 있다
        this.name = name;
        // this 키워드를 사용하지 않아도 초기화 가능하지만, 의미를 명확하게 하기 위해 보통 작성한다.
        // 이름을 동일하게 하면 this가 없이 못알아들을 가능성도 있다.
        grade = gr;
    }

    //     2-2 클래스의 (생성자가 아닌) 메소드
    public void goToSchool() { // 반환값X, 매개변수X
        System.out.println("학교에 갑니다.");
    }

    public void study(String subject) { // 반환값X, 매개변수O
        System.out.println(subject + " 공부중...");
    }

    public int getGrade() { // 반환값O int, 매개변수X
        return this.grade;
    }

    public String getTestResult(int score) {
        return this.name + "의 점수는 " + score;
    }

    @Override
    public String toString() {
        // 메소드 재정의
        return "Student {name=\"" + name + "\", grade=" + grade + "}";
    }

}
