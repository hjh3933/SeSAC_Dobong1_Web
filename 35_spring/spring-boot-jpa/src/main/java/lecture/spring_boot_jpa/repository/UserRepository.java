package lecture.spring_boot_jpa.repository;

import lecture.spring_boot_jpa.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// JpaRepository<entity class, table pk 자료형>

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    // List<UserEntity> findAll(); // 기본 제공, 정의 필요없음
    List<UserEntity> findByName(String name);
    // Optional: null 일 수도 있는 객체를 감싸는 것
    Optional<UserEntity> findById(int id);
    
    // raw query 이용
    // jpa 자체적인 sql(?) -> JPQL
    // JPQL : Java Persistence Query Language
    // @Query(nativeQuery = true, value = "SELECT * FROM user WHERE name = :name") // nativeQuery
    @Query("SELECT u FROM UserEntity u WHERE u.name = :name") // JPQL
    public List<UserEntity> findByNameCustom(String name);
}
