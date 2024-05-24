package lecture.springbootthymeleaf.vo;

import lombok.Getter;

@Getter
public class UserDetailVO {
    private String name;
    private String gender;
    private String[] interests;
    private int birthYear;
    private int birthMonth;
    private int birthDate;
}
