package lecture.spring_boot_jpa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity // 해당 클래스가 entity임을 명시
// 기본 생성자를 필요로함(무조건)
@Table(name="user") // user라는 테이블과 해당 클래스를 매핑
@Getter
@Builder // 전체 필드를 받는 생성자를 필요로 함
// entity 와 builder 를 동시에 사용하게 될 경우,
// entity 와 builder 의 요건이 충돌하므로 기본생성자와 모든 필드를 받는 생성자를 둘 다 만들도록 어노테이션으로 명시해주어야한다
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id // PK primary key 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment 옵션을 의미함
    private int id;

    @Column(name = "name", nullable = false, length = 10)
    private String name;

    @Column(name = "nickname", nullable = false, length = 20)
    private String nickname;
}
