package lecture.spring_boot_jpa.repository;

import lecture.spring_boot_jpa.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
    // 기본 제공 메소드 사용중
}
