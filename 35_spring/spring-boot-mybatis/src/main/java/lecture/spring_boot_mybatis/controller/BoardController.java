package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
@Slf4j
public class BoardController {
    @Autowired
    private BoardService boardService;

    // 페이지 로드
    @GetMapping("")
    public String getBoard(Model model) {
        List<BoardDTO> boards = boardService.getBoardList();
        model.addAttribute("boards", boards);
        return "board";
    }

    // 게시글 작성
    @PostMapping("")
    @ResponseBody
    public Map<String,Boolean> insertBoard(@RequestBody BoardCreateDTO board) {
        Map<String, Boolean> result = new HashMap<String, Boolean>();
        try{
            boardService.insertBoard(board);
            result.put("result", true);
        } catch (Exception e) {
            log.error("insert error {} ", e.getMessage());
            result.put("result", false);
        }
            return result;
    }

    // 게시글 수정
    @PatchMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> patchBoard(@RequestBody BoardCreateDTO board, @PathVariable int id) {
        Map<String, Boolean> result = new HashMap<String, Boolean>();
        try{
            boardService.updateBoard(id, board);
            result.put("result", true);
        } catch(Exception e){
            log.error("patch error {}",e.getMessage());
            result.put("result", false);
        }
        return result;
    }
    @DeleteMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> deleteBoard(@PathVariable int id) {
        Map<String, Boolean> result = new HashMap<>();
        try{
            boardService.deleteBoard(id);
            result.put("result", true);
        } catch(Exception e) {
            result.put("result", false);
        }
        return result;
    }

    // 검색을 구현해보자
    @GetMapping("/search/{search}")
    @ResponseBody
    public List<BoardDTO> getSearch(@PathVariable String search) {
        List<BoardDTO> boards = boardService.getSearchBoardList(search);
        return boards;
    }
}
