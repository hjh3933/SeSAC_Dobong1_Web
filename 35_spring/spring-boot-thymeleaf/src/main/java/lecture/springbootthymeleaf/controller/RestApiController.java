package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.UserDTO;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

// responseBody 어노테이션을 매번 붙일필요 없이 자동으로 붙여준다
@RestController
@RequestMapping("/restapi")
public class RestApiController {

    @GetMapping("/user")
    public String get() {
        String name = "lily";
        int age = 24;
        return name + ", " + age;
    }

    // postman row로 json형태로 보내볼 수 있음
    @PostMapping("/user")
    public String post(@RequestBody UserDTO user) {
        // model 연결 후 db 삽입
        return user.getName() + ", " + user.getAge();
    }

    @PatchMapping("/user/{id}")
    public String patch(@PathVariable int id, @RequestBody UserDTO user) {
        // session 등의 인증 확인 작업 후 db 수정 작업
        return id + "님의 정보 수정: " + user.getName() + ", " + user.getAge();
    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id) {
        // session 등의 인증 확인 작업 후 db 삭제
        return id + "님의 정보 삭제";
    }

}
