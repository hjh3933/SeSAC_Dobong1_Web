package springlecture.springbootsecurity.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @GetMapping("")
    // CustomAuthFilter 의 36번째 줄 코드와 같은 타입으로 변수 받아야함
    public String getTodo(@AuthenticationPrincipal String userid) {
        // @AuthenticationPrincipal : SecurityContextHolder 에 담아둔 정보를 가져옴
        return "get todo success "+ userid;
        // session.getAttribute("userId")로 가져올 수도 있지만 위에가 더 좋은 방법임
    }
}
