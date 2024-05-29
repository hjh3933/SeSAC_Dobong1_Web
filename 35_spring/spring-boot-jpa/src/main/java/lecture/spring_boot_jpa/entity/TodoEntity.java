package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@Table(name = "todo")
@NoArgsConstructor
@AllArgsConstructor
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false)
    @Builder.Default
    private boolean done = false;

    // 외래키 설정
    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    @JsonBackReference // User 와 Todo 사이의 순환 참조가 발생하는 것을 방지
    private UserEntity user;
}
