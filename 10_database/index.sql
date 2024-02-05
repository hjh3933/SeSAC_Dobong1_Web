-- execute눌러야 실행됨
-- ---------------------db 명령어
show DATABASES;
DROP DATABASE sesac;
DROP DATABASE mydatabase;
show DATABASES;
-- 주석은 ctrl / /**/여러줄 주석
-- create : database 생성
CREATE DATABASE sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
-- dobong이라는 데이터 베이스를 생성하는데
-- 문자열 셋을 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용
-- utf8mb4는 utf8보다 많은 문자 지원(이모지 저장 가능)
-- 이모지를 저장하는 db라면 utf8mb4, 저장하지 않아도 된다면 utf8 사용
create DATABASE dobong DEFAULT CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;
show DATABASES;
-- 이 db를 사용하겠다는 명령어 use
use sesac;

-- -----------------table 명령어
/*1. creat TABLE 이름 (
    속성1 값형식 제약조건,
    속성2 값형식 제약조건
);
*/ 
-- 제약조건
-- not NULL: null허용 X
-- AUTO_INCREMENT: 자동 숫자 증가
-- primary KEY: 기본키, 중복과 null허용 X
-- DEFAULT: 기본값
-- unique: 중복 허용X, null값은 허용, 한테이블에 여러개(제약조건)가능

CREATE Table products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_name VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);
-- table목록 확인
SHOW TABLES;
-- table구조 확인
DESC products;
-- table 삭제
DROP Table products;
-- table안의 데이터 삭제
TRUNCATE TABLE products;

-- 테이블 수정
-- alter table 이름 ~
-- 1. column추가
ALTER Table products ADD new_column VARCHAR(20);
-- 2. column 수정 데이터 타입 수정
ALTER Table products MODIFY new_column INT;
-- 3. column삭제
ALTER Table products DROP new_column;

-- DML(CRUD)
-- data manipulation language(데이터 조작어)
-- user TABLE(id: INT not null AUTO_INCREMENT PRIMARY KEY, 
-- name: VARCHAR(10) not null, age: int not null, adress: VARCHAR(100))
CREATE Table user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    adress VARCHAR(100)
);
DESC user;
-- create 데이터 추가 insert INTO
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');
-- table전체 조회
SELECT * FROM user;

-- update 데이터 수정 update 이름 set 컬럼 = 내용 where 조건 
UPDATE user SET name = '남도일' WHERE id = 5;

-- delete 데이터 삭제 delete from 이름 where 조건
DELETE FROM user WHERE id = 1;

-- 이씨인 사람 지우기
DELETE FROM user WHERE name LIKE "이%";
SELECT * FROM user;

DELETE FROM user; -- 전체 데이터 삭제 TRUNCATE와 디스크 상의 공간차이가 있다
-- DELETE는 디스크 공간 반환X TRUNCATE는 디스크 공간도 반환
TRUNCATE TABLE user;

ALTER Table user drop adress;
ALTER Table user add address VARCHAR(100);

-- select 데이터 조회 READ
SELECT * FROM user;
SELECT name FROM user;

-- where로 조건적용
SELECT * FROM user WHERE age >= 25;
SELECT * FROM user WHERE id = 3;
-- order by: 데이터 정렬 (where 뒤에)
-- desc: 내림차순
-- asc: 오름차순
SELECT * FROM user ORDER BY age ASC;
SELECT * FROM user ORDER BY age DESC;
SELECT * FROM user WHERE id>=6 ORDER BY age;

-- like 문자열 조회 where에 사용
-- 서울로 시작하는 주소 찾기
SELECT * FROM user WHERE address LIKE "서울%";

-- 이름의 마지막 글자가 희 인 사람 검색
SELECT * FROM user WHERE name LIKE "__희";
-- 주소에 광역시 들어가는 사람
SELECT * FROM user WHERE address LIKE "%광역시%"
-- 이름에 희가 들어가는 사람 이름만 조회 age DESC

SELECT * FROM user WHERE name LIKE "%희%";
-- limit: 데이터의 개수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user WHERE address LIKE "서울%" LIMIT 2;

-- BETWEEN a AND b 범위 a포함 b포함(사이값 조회)
SELECT * FROM user WHERE age BETWEEN 25 AND 30; 
-- in(22,32,21,25) 각 값에 하나라도 해당하면 검색된다
SELECT * FROM user WHERE age IN(20,21,22,23);

-- is null, is not null -> true or false
INSERT INTO user (name, age) VALUES ("서현승", 28);
SELECT * FROM user;
SELECT * FROM user WHERE address IS NULL;
SELECT name, address FROM user WHERE address IS NOT NULL;

-- 논리 연산자: and or not
-- 주소가 null이 아니고 age가 25보다 큰 전체
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;
SELECT * FROM user WHERE address IS NOT NULL OR age > 25;
-- 이씨 이면서 나이가 22살인 사람 이름만
SELECT name FROM user WHERE name LIKE "이%" AND age = 22;

-- distinct: 중복 튜플 제거
SELECT DISTINCT age FROM user;

DESC user;

-- 실습 -------------------------------------------------------------------
-- 실습1
use dobong;
CREATE Table member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'X'
);
DESC member;
-- 실습2
ALTER Table member MODIFY id VARCHAR(10);
ALTER Table member DROP age;
ALTER Table member ADD interest VARCHAR(100);
DESC member;
-- 실습3
-- 제한을 두는 데이터 타입 ENUM() 문자열, 숫자 모두 가능
CREATE Table user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') DEFAULT '',
    birthday DATE NOT NULL,
    -- INT도 바이트 제한 가능(저장공간 절약 가능)
    age INT(3) NOT NULL DEFAULT 0
);
DESC user;
-- 실습4
INSERT INTO user values ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user values ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user values ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user values ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user values ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user values ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user values ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;
-- 실습5
SELECT * from user ORDER BY birthday;
SELECT * from user WHERE gender = 'M' ORDER BY name desc;
SELECT id, name FROM user WHERE birthday LIKE "199%";
SELECT * from user WHERE birthday LIKE "____-06-__" ORDER BY birthday;
-- SELECT * from user WHERE birthday LIKE "%-06-%" ORDER BY birthday;
SELECT * from user WHERE gender = 'M' AND birthday LIKE '197%';
SELECT * from user ORDER BY age DESC LIMIT 3 ; --limit 위치 주의하기
SELECT * from user WHERE age BETWEEN 25 and 50;
-- SELECT * from user WHERE age >= 25 and age <= 50;
UPDATE user set pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';

SELECT * FROM user;

-- where, group by, having, order by, limit 등의 순서
-- select * from table >> where >> group by >> having >> order by >> limit