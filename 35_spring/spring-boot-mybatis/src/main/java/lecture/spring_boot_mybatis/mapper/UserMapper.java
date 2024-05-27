package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper // Spring 에게 해당 interface가 mapper역할을 하는 interface임을 알림.
public interface UserMapper {
    List<User> retrieveAll();

    // ver1. xml과 매핑
    // void insertUser(UserCreateDTO user);
    // ver2. 어노테이션으로 현재 위치에서 sql작성
    @Insert("INSERT INTO user (name, nickname) VALUES (#{name}, #{nickname})")
    void insertUser(UserCreateDTO user);

    void updateUser(User user);
    void deleteUser(int id);
}
