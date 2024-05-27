package lecture.spring_boot_mybatis.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter // Builder 사용하면 Setter 주석처리해도 된다는 점 잊지마!
@Builder // builder 패턴을 이용하여 객체를 생성하는 것을 도와주는 도구
// 전체 필드를 인자로 받는 생성자를 자동으로 생성
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    // private Timestamp register;
    private String register;
    private String no;
}
