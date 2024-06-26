package lecture.spring_boot_jpa.Controller;

import lecture.spring_boot_jpa.Service.UserService;
import lecture.spring_boot_jpa.dto.ResErrorDTO;
import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    // @GetMapping("")
    // public List<UserEntity> getUsers() {
    //     return userService.getUsers();
    // }

    // ResponseEntity - 기본 제공 클래스
    // 적절한 응답 코드 및 본문을 생성해주는 역할을 함.
    @GetMapping("")
    public ResponseEntity<List<UserEntity>> getUsers() {
        List<UserEntity> users = userService.getUsers();
        // 응답 성공 시 ok 메소드 or ok.body 사용
        return ResponseEntity.ok(users);
        // return ResponseEntity.ok().body(users);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getUserByName(@PathVariable String name) {
        // <?> : 자바의 와일드카드
        List<UserEntity> users = userService.getUserByName(name);

        // List<UserDTO> resUsers = new ArrayList<>();
        // for (int i = 0; i < users.size(); i++) {
        //     UserDTO user = UserDTO.builder()
        //             .id(users.get(i).getId())
        //             .name(users.get(i).getName())
        //             .nickname(users.get(i).getNickname())
        //             .no(i + 10)
        //             .build();
        //     resUsers.add(user);
        // }
        
        // for 문 말고 다른 방법으로 사용하는 법
        List<UserDTO> resUsers = users.stream().map(user->UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .nickname(user.getNickname())
                .no(user.getId()+10)
                .build()) // 여기까지만 하면 Stream 형태
                .collect(Collectors.toList()); // List 형태로 변환해줌
        return ResponseEntity.ok(resUsers);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable int id) {
        try{
            UserEntity user = userService.getUserById(id);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // insert, update, delete
    @PostMapping("")
    public ResponseEntity<?> insertUser(@RequestBody UserCreateDTO user) {
        try{
            UserEntity newUser = userService.insertUser(user);
            UserDTO userDTO = UserDTO.builder()
                    .id(newUser.getId())
                    .name(newUser.getName())
                    .nickname(newUser.getNickname())
                    .build();
            return ResponseEntity.ok(userDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchUser(@RequestBody UserCreateDTO user, @PathVariable int id) {
        try {
            UserEntity updateUser = userService.updateUser(user, id);
            return ResponseEntity.ok(updateUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok().body(id+"번 회원 삭제완료");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }
    
    // 한 명의 유저에 대한 모든 todo를 검색해보기
    @GetMapping("/todos/{userId}")
    public ResponseEntity<?> getTodosByUser(@PathVariable int userId) {
        try {
            return ResponseEntity.ok(userService.getTodosByUser(userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }
}
