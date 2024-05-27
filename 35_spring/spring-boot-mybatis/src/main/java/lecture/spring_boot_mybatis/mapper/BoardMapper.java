package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> retrieveAll();
    List<Board> retrieveSearch(String search);
    public void insertBoard(BoardCreateDTO board);
    public void updateBoard(Board board);
    public void deleteBoard(int id);
}
