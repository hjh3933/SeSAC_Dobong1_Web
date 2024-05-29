package lecture.spring_boot_jpa.Service;

import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public List<UserEntity> getUsers() {
        return userRepository.findAll();
    }
    public List<UserEntity> getUserByName(String name) {
        // return userRepository.findByName(name);
        return userRepository.findByNameCustom(name);
    }
    public UserEntity getUserById(int id) {
        Optional<UserEntity> user = userRepository.findById(id);
        // Optional.isPresent() = null인지 아닌지 확인, boolean값 리턴
        if (user.isPresent()) {
            // Optional.get() = <>안의 요소
            return user.get();
        } else {
            throw new RuntimeException("user doesn't exist");
        }
    }
    public UserEntity insertUser(UserCreateDTO user) {
        UserEntity newUser = UserEntity.builder()
                .name(user.getName())
                .nickname(user.getNickname())
                .build();
        // save에는 entity 객체를 만들어서 넣어야함
        // pk가 없다면, insert
        // pk가 있으면, update
        // save는 만들어진 entity를 리턴함
        return userRepository.save(newUser);
    }

    public UserEntity updateUser(UserCreateDTO user, int id) {
        UserEntity userEntity = userRepository.findById(id)
                // Optional 값이 없으면 예외를 발생시키는 메소드
                .orElseThrow(()->new RuntimeException("user doesn't exist"));
        // 조회된 값이 있으면 userEntity에 담고 그렇지 않다면 error를 발생시킨다

        UserEntity updateUser = UserEntity.builder()
                .id(userEntity.getId())
                .name(user.getName())
                .nickname(user.getNickname())
                .build();

        // entity 객체만들어서 pk 값을 설정한 후 repository.save() 하면 된다
        return userRepository.save(updateUser);
    }
    public void deleteUser(int id) {
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(()->new RuntimeException("user doesn't exist"));
        // userRepository.deleteById(userEntity.getId()); // pk id로 삭제
        userRepository.delete(userEntity); // entity 정보로 삭제
    }

    public UserEntity getTodosByUser(int userId) {
        UserEntity userEntity = userRepository.findById(userId)
                .orElseThrow(()->new RuntimeException("user doesn't exist"));

        // UserEntity {id, name, nickname, todos: [] }
        return userRepository.findTodosByUser(userId);
    }
}
