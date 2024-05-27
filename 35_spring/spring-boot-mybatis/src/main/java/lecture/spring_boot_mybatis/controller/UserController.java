package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
@Slf4j // 로그를 찍을 수 있게 해주는 라이브러리 log.error, log.info, log.warn(경고) 등 사용 가능
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("")
    @ResponseBody
    public List<UserDTO> getUsers() {
        return userService.getUserList();
    }

    @PostMapping("")
    @ResponseBody
    public Map<String,Boolean> insertUser(@RequestBody UserCreateDTO user) {
        // userinsert 로직
        userService.insertUser(user);

        Map<String, Boolean> result = new HashMap<String, Boolean>();
        result.put("result", true);
        return result;
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> patchUser(@RequestBody UserCreateDTO user, @PathVariable int id) {
        Map<String, Boolean> result = new HashMap<String, Boolean>();
        try{
            userService.updateUser(id, user);
            result.put("result", true);
        } catch(Exception e){
            log.error("patch error {}",e.getMessage());
            result.put("result", false);
        }
        return result;
    }
    @DeleteMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> patchUser(@PathVariable int id) {
        Map<String, Boolean> result = new HashMap<>();
        try{
            userService.deleteUser(id);
            result.put("result", true);
        } catch(Exception e) {
            result.put("result", false);
        }
        return result;
    }
}
