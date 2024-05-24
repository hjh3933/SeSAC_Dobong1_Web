package lecture.springbootthymeleaf.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDto {
    private String userid;
    private String title;
    private String content;
}
