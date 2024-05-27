package lecture.spring_boot_mybatis.domain;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class Board {
    private int id;
    private String title;
    private String content;
    private String writer;
    // private Timestamp register;
    private String register;
}
