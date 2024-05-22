package lecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HelloController {

    // get메소드 localhost:8080/hi
    @GetMapping("/hi")
    public String hello(Model model) {

        Hello hello = new Hello();
        String[] fruits = {"apple", "banana", "grape"};
        // model.addAttribute("변수이름", 데이터);
        model.addAttribute("msg", "hi~~~~");
        model.addAttribute("msg2", "<strong>안녕?</strong>");
        model.addAttribute("age", 17);
        model.addAttribute("userType", "Admin"); // Admin, User, 그 외
        model.addAttribute("fruits", fruits);
        model.addAttribute("url", "https://www.google.com/");
        model.addAttribute("hello", hello);
        // 기본적으로 templates 주소 + .html은 생략 가능
        return "hi";
    }

    @GetMapping("/prac/1")
    public String prac01(Model model) {
        model.addAttribute("age", 17);
        return "/prac1";
    }

    @GetMapping("/prac/2")
    public String prac02(Model model) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("juhee", 24));
        people.add(new Person("jisu", 27));
        people.add(new Person("hansu", 57));
        people.add(new Person("allie", 28));
        model.addAttribute("people", people);
        return "/prac2";
    }

    class Hello {
        private String msg = "hi";

        public String getMsg() {
            return this.msg;
        }
    }

    class Person {
        private String name;
        private int age;

        public String getName() {
            return name;
        }

        public int getAge() {
            return age;
        }

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

    }
}
