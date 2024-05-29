package lecture.spring_boot_jpa.Controller;

import lecture.spring_boot_jpa.Service.BoardService;
import lecture.spring_boot_jpa.dto.*;
import lecture.spring_boot_jpa.entity.BoardEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/board")
public class BoardController {
    @Autowired
    BoardService boardService;

    @GetMapping("")
    public String getUsers(Model model) {
        List<BoardDTO> boards = boardService.getBoards();
        model.addAttribute("boards", boards);
        return "board";
    }

    @PostMapping("")
    @ResponseBody
    public ResponseEntity<?> insertBoard(@RequestBody BoardCreateDTO board) {
        try{
            BoardEntity newBoard = boardService.insertBoard(board);
            BoardDTO boardDTO = BoardDTO.builder()
                    .id(newBoard.getId())
                    .title(newBoard.getTitle())
                    .content(newBoard.getContent())
                    .writer(newBoard.getWriter())
                    .register(newBoard.getRegister())
                    .no(newBoard.getWriter()+(newBoard.getId()))
                    .build();
            return ResponseEntity.ok(boardDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> updateBoard(@RequestBody BoardCreateDTO board, @PathVariable int id) {
        try {
            BoardEntity updateBoard = boardService.updateBoard(board, id);
            return ResponseEntity.ok(updateBoard);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        try {
            boardService.deleteBoard(id);
            return ResponseEntity.ok().body(id+"번 게시글 삭제완료");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }
}
