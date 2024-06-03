package springlecture.springbootsecurity.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@Slf4j
public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    private TokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            // [Session 인증 방식]
            // (1) Http session 에 존재하는 userId 값을 확인해서
            // (2) user id가 존재하면, securityContextHolder 에 UserNamePasswordAuthToken 만들어서 저장

            // [Token 인증 방식]
            // (1) 요청 Header 에 담겨온 token 을 뽑아서 유효한지 확인
            String token = parseBearerToken(request); // 밑의 함수 사용
            log.warn("filter token check {}", token);

            if(token!=null && !token.equalsIgnoreCase("null")) {
                // null NULL Null 대소문자 무시하고 비교
                String userId = tokenProvider.validateAndGetUserId(token);
                // (2) 유효하면, securityContextHolder 에 UserNamePasswordAuthToken 만들어서 저장
                Authentication authentication = new UsernamePasswordAuthenticationToken(userId, null, AuthorityUtils.NO_AUTHORITIES);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }


        } catch (Exception e) {
            log.error("auth check error {}", e.getMessage());
        }

        filterChain.doFilter(request, response);
    }
    
    public String parseBearerToken(HttpServletRequest request) {
        // 요청의 header 에서 bearer token 을 뽑아오는 작업
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            // null, 공백이 아닌지 && Bearer 로 제대로 시작하는 문자열인지 검사

            // Bearer abcdefg => abcdefg 만 추출
            return bearerToken.substring(7); //앞의 7글자를 떼어 내는 작업
        }

        return null;
    }
}
