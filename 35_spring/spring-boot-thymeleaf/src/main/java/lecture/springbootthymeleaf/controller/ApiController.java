package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.UserDTO;
import lecture.springbootthymeleaf.vo.UserDetailVO;
import lecture.springbootthymeleaf.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.stream.IntStream;

@Controller
@RequestMapping("/api")
public class ApiController {
    // 컨트롤러에서 에러가 발생할 경우, ExceptionHandler가 catch 하여 해당 로직 처리
    @ExceptionHandler
    public String errHandler(Exception e) {
        System.out.println("error: " + e.getMessage());
        return "error";
    }

    // GET ~~~~~:8080/api/prac2
    @GetMapping("/prac/2")
    public String prac2View(Model model) {
        int[] years = IntStream.rangeClosed(1970, 2024).toArray();
        int[] month = IntStream.rangeClosed(1, 12).toArray();
        int[] dates = IntStream.rangeClosed(1, 31).toArray();
        model.addAttribute("birthYear", years);
        model.addAttribute("birthMonth", month);
        model.addAttribute("birthDate", dates);
        return "apiPrac02";
    }

    // @PostMapping("/prac/2")
    // public String prac2Res(@RequestParam String name,
    //                        @RequestParam String gender,
    //                        @RequestParam int birthYear,
    //                        @RequestParam int birthMonth,
    //                        @RequestParam int birthDate,
    //                        @RequestParam String[] interests,
    //                        Model model) {
    //     String interest = String.join(",", interests);
    //     model.addAttribute("name", name);
    //     model.addAttribute("gender", gender);
    //     model.addAttribute("birthYear", birthYear);
    //     model.addAttribute("birthMonth", birthMonth);
    //     model.addAttribute("birthDate", birthDate);
    //     // 이거 다시 하기
    //     model.addAttribute("interests", interest);
    //
    //     return "apiPrac02Res";
    // }
    @PostMapping("/prac/2")
    @ResponseBody
    public String prac2Res(@RequestBody UserDetailVO user) {
        String interest = String.join(",", user.getInterests());
        return user.getName() + "회원가입 성공! 취미는 " + interest;
        // return user.getName() + "회원가입 성공!";
    }

    @GetMapping("")
    public String api() {
        return "api";
    }

    @PostMapping("/res4")
    public String postRes4(
            @ModelAttribute UserDTO userDto,
            Model model) {
        // @ModelAttribute
        // 객체로 데이터를 전송받게끔 도와줌, 해당 객체의 setter를 이용해서 데이터를 매핑시킴
        // url에 있는 데이터를 매핑
        // 어노테이션 생략 가능

        // 오류 난다고 뜨는데 전송은 잘 되는 중(Getter와 Setter필수)
        model.addAttribute("name", userDto.getName());
        model.addAttribute("age", userDto.getAge());

        return "res";
    }

    @PostMapping("/res5")
    public String postRes5(
            @ModelAttribute UserVO userVO,
            Model model) {
        // 기본값 출력됨
        model.addAttribute("name", userVO.getName());
        model.addAttribute("age", userVO.getAge());

        return "res";
    }

    @GetMapping("/res6")
    public String postRes6(
            @ModelAttribute UserDTO userDto,
            Model model) {
        model.addAttribute("name", userDto.getName());
        model.addAttribute("age", userDto.getAge());

        return "res";
    }


    // ----------------- @RequestBody
    @GetMapping("/res7")
    public String postRes7(
            @RequestBody UserDTO userDto,
            Model model) {
        // get요청은 body가 없어서 오류발생
        model.addAttribute("name", userDto.getName());
        model.addAttribute("age", userDto.getAge());

        return "res";
    }

    @PostMapping("/res8")
    public String postRes8(
            @RequestBody UserDTO userDto,
            Model model) {
        // 일반 폼 전송의 Content-Type은 application/x-www-form-urlencoded;charset=UTF-8이기 때문에
        // error: Content-Type 'application/x-www-form-urlencoded;charset=UTF-8' is not supported
        // @RequestBody는 application/json형태의 Content-Type을 매핑시킬 수 있음
        model.addAttribute("name", userDto.getName());
        model.addAttribute("age", userDto.getAge());

        return "res";
        // vo로 테스트해도 둘 다 오류날 예정
    }


    // axios
    @PostMapping("/res9")
    @ResponseBody // page 아니고 데이터 자체를 return
    public String postRes9(
            @RequestBody UserDTO user) {
        return user.getName() + "님 환영합니다.";
    }


    @PostMapping("/res10")
    @ResponseBody
    public String postRes10(
            @RequestBody UserVO user) {
        // @ResponseBody는 dto 객체의 settter를 이용해서 매핑하는게 아닌
        // 자체적으로 가지고 있는 메소드로 매핑을 시킴
        String msg = user.getName() + "님 환영합니다.";
        return msg;
    }


}
