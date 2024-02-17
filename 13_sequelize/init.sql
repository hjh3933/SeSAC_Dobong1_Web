-- Active: 1707101290768@@127.0.0.1@3306@sesac
SHOW TABLES;
CREATE Table visitor(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);
DESC visitor;
DROP Table visitor;

INSERT INTO visitor(name, comment) VALUES ('allie', 'hi~');
INSERT INTO visitor VALUES (NULL, '홍길동', '홍길동입니다!!!');
INSERT INTO visitor VALUES (NULL, '니모', 'ㄹㄴㄹㄴㄹㄴ');
INSERT INTO visitor VALUES (NULL, '룰루', '미드룰루');
SELECT * FROM visitor;

-- DCL
-- 권한 가진 새로운 사용자 설정필요 root로 접근불가
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- 반드시 암호화 방식 변경하는 문장 실행해야 한다 뒤에 BY '새로운 비밀번호'로 사용도 가능
-- 권한 오류가 계속 발생할 경우 BY로 비밀번호 재설정하면 해결되는 경우가 있다고한다
-- 위의 두줄 한줄로 쓸 수 있음
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
-- 모든 DB에 접근가능하도록 sesac계정에 DB접근 권한을 부여
FLUSH PRIVILEGES;
-- 현재 사용중인 sql캐시를 지우는 작업(필수!) 새로운 설정 적용

SELECT * FROM user;
DESC user;