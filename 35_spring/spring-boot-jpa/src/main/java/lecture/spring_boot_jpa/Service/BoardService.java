package lecture.spring_boot_jpa.Service;

import lecture.spring_boot_jpa.dto.BoardCreateDTO;
import lecture.spring_boot_jpa.dto.BoardDTO;
import lecture.spring_boot_jpa.entity.BoardEntity;
import lecture.spring_boot_jpa.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    public List<BoardDTO> getBoards() {
        List<BoardEntity> result = boardRepository.findAll();
        List<BoardDTO> boards = new ArrayList<>();

        for(int i=0; i<result.size(); i++) {
            BoardDTO boardDTO = BoardDTO.builder()
                    .id(result.get(i).getId())
                    .title(result.get(i).getTitle())
                    .content(result.get(i).getContent())
                    .writer(result.get(i).getWriter())
                    .register(result.get(i).getRegister())
                    .no(result.get(i).getWriter()+(i+1))
                    .build();

            boards.add(boardDTO);
        }

        return boards;
    }
    public BoardEntity insertBoard(BoardCreateDTO board) {
        BoardEntity newBoard = BoardEntity.builder()
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .build();
        return boardRepository.save(newBoard);
    }
    public BoardEntity updateBoard(BoardCreateDTO board, int id) {
        BoardEntity boardEntity = boardRepository.findById(id)
                .orElseThrow(()->new RuntimeException("user doesn't exist"));

        BoardEntity updateBoard = BoardEntity.builder()
                .id(boardEntity.getId())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .build();

        return boardRepository.save(updateBoard);
    }

    public void deleteBoard(int id) {
        BoardEntity boardEntity = boardRepository.findById(id)
                .orElseThrow(()->new RuntimeException("user doesn't exist"));
        boardRepository.delete(boardEntity);
    }
}
