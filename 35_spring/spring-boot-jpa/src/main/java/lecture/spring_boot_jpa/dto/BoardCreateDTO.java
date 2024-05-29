package lecture.spring_boot_jpa.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardCreateDTO {
    private String title;
    private String content;
    private String writer;
}
