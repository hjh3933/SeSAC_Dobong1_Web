CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
DESC customer;
INSERT INTO customer VALUES ('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');
SELECT * FROM customer;

CREATE TABLE orderlist(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) 
    ON UPDATE CASCADE ON DELETE CASCADE
);
-- FOREIGN KEY (현재테이블컬럼이름fk) REFERENCES 기준테이블(기준컬럼pk) 
-- ON UPDATE CASCADE: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- ON DELETE CASCADE: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제

-- 테이블을 삭제할 때 혹은 생성할 때 '순서'에 주의 참조되는 테이블(customer) 먼저 생성! 참조하는 테이블(orderlist) 먼저 삭제!

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT * FROM orderlist;

-- outer보다 innerjoin을 훨씬 많이 사용한다
-- 1. inner join, on
SELECT * FROM customer INNER JOIN orderlist ON customer.id = orderlist.customer_id;
-- 2. , where
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name 
FROM customer, orderlist 
WHERE customer.id = orderlist.customer_id; 
--innerjoin의 의미 ,로 구분 --on대신 where로 사용가능
-- 3. inner join, on, where
SELECT *
FROM customer c INNER JOIN orderlist o
ON c.id = o.customer_id
WHERE o.quantity >= 5;
-- 4. 테이블 별칭지어서 접근하기 as or 생략, 속성도 as로 별칭적용 후 출력가능
SELECT o.id as orderId, c.id, c.name, o.product_name
FROM customer as c, orderlist as o
WHERE c.id = o.customer_id;
-- natural join 조건을 쓰지 않는 inner join
SELECT * FROM orderlist NATURAL JOIN customer; --지금은 컬럼이름과 데이터 타입이 동일한 것이 없어서 안나옴

-- outer join
SELECT * FROM orderlist LEFT OUTER JOIN customer ON customer.id = orderlist.customer_id;
-- ddd조현우는 구매내역이 없어서 orderlist의 정보가 NULL값으로 표시된다(튜플은 제대로 출력)
SELECT * FROM orderlist RIGHT OUTER JOIN customer ON customer.id = orderlist.customer_id;

-- 혼자 해보기
-- a대학
CREATE TABLE uniA (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL
);
DESC uniA;
INSERT INTO uniA VALUES ('20115544', 'a', 34);
INSERT INTO uniA VALUES ('20156677', 'b', 31);
INSERT INTO uniA VALUES ('20227755', 'c', 25);
INSERT INTO uniA VALUES ('20232223', 'd', 23);
INSERT INTO uniA VALUES ('20201144', 'e', 23);
INSERT INTO uniA VALUES ('20145145', 'f', 30);
INSERT INTO uniA VALUES ('20180919', 'g', 26);
SELECT * FROM uniA;
CREATE TABLE uniB (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL
);
INSERT INTO uniB VALUES ('2022091994', 'h', 29);
INSERT INTO uniB VALUES ('2020101021', 'i', 23);
INSERT INTO uniB VALUES ('2018187566', 'j', 26);
SELECT * FROM uniB;

CREATE TABLE subject (
    sub_id INT AUTO_INCREMENT PRIMARY KEY,
    id VARCHAR(10) NOT NULL,
    subject_name VARCHAR(20) NOT NULL
);
DROP TABLE subject;
INSERT INTO subject VALUES (NULL, '20115544', '네트워크');
INSERT INTO subject VALUES (NULL, '20115544', '알고리즘');
INSERT INTO subject VALUES (NULL, '20156677', '알고리즘');
INSERT INTO subject VALUES (NULL, '20227755', '네트워크');
INSERT INTO subject VALUES (NULL, '20232223', 'C언어');
INSERT INTO subject VALUES (NULL, '20145145', '캡스톤');
INSERT INTO subject VALUES (NULL, '20180919', '캡스톤');
INSERT INTO subject VALUES (NULL, '20180919', 'C언어');
INSERT INTO subject VALUES (NULL, '20180919', '네트워크');
INSERT INTO subject VALUES (NULL, '2022091994', 'C언어');
INSERT INTO subject VALUES (NULL, '2022091994', '캡스톤');
INSERT INTO subject VALUES (NULL, '2022091994', '웹프레임워크');
INSERT INTO subject VALUES (NULL, '2018187566', 'C언어');
INSERT INTO subject VALUES (NULL, '2018187566', '네트워크');
INSERT INTO subject VALUES (NULL, '2018187566', '캡스톤');

-- innerjoin
SELECT *
FROM uniA INNER JOIN subject
ON uniA.id = subject.id;
-- left outer JOIN
SELECT *
FROM uniA as a LEFT OUTER JOIN subject as s
ON a.id = s.id;
-- right outer JOIN
SELECT *
FROM uniA as a RIGHT OUTER JOIN subject as s
ON a.id = s.id;
-- natural JOIN
SELECT *
FROM uniA NATURAL JOIN subject;