package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.BoardDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/restBoard")
public class RestBoard {
    // 게시판 등록 post
    @PostMapping("/post")
    public String postBoard(@RequestBody BoardDto board) {
        return board.getTitle() + " 등록완료!";
    }

    // 게시판 읽기 get
    @GetMapping("/get")
    public String getBoard() {
        String userid = "user1";
        String title = "글제목1";
        String content = "글내용1";
        return "작성자 " + userid + "님의 글 => " + title + ": " + content;
    }

    // 게시판 수정 patch
    @PatchMapping("/patch/{userid}")
    public String patchBoard(@PathVariable String userid, @RequestBody BoardDto board) {
        return userid + "님의 글: " + board.getTitle() + " 수정완료!";
    }

    // 게시판 삭제 delete
    @DeleteMapping("/delete/{userid}")
    public String deleteBoard(@PathVariable String userid) {
        return userid + "님의 글 삭제 완료!";
    }

}
