package lecture.spring_boot_mybatis.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DefaultResDTO {
    private boolean result;
    private String errMsg;
}
