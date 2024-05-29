package lecture.spring_boot_jpa.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String register;
    private String no;
}
