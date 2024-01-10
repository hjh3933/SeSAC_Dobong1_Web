//Date객체
//현재 시간, 날짜에 대한 정보를 얻기 위해 사용
//원하는 값으로 초기화 가능
let now = new Date();
console.log(now)

//new Date('날짜 문자열')
console.log(new Date('September 30, 2000 13:00:00'))
console.log(new Date(2002,3,2))

console.log(now.getFullYear(), '년')
console.log(now.getMonth(), '월') //0~11월
console.log(now.getDate(), '일') //몇일
console.log(now.getHours(), '시') //0~23시간
console.log(now.getMinutes(), '분') //0~59분
console.log(now.getSeconds(), '초') //0~59초
console.log(now.getMilliseconds(), '초') //밀리초 0~999(1000=1초)
console.log(now.getDay(), '요일') //0~6(0=일요일, 1=월요일)

//math객체
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

//메소드
console.log(Math.min(1,2,3,4,5,6,7,-3))
console.log(Math.max(1,2,3,4,5,6,7,-3))
console.log(Math.ceil(5.1)) //올림
console.log(Math.floor(5.1)) //내림
console.log(Math.round(5.5)) //반올림

//0<=x<1 random
console.log(Math.random())
//0<=x<3 random
console.log(Math.floor(Math.random()*3))

//1 ~ 45  lotto
//0<=x <45
//0<=x <45 +1 -> 1<=x<46
console.log(Math.floor((Math.random()*45)+1))

// object 관련 객체
const areaNum = {
    Seoul: '02',
    Incheon: '032',
    Busan: '051',
    Ulsan: '052',
    Gwangju: '062',
    jeju: '064'
}
//이런 선언방법도 있다 참고만
const obj = new Object({
    a:10,
    b:55
})
console.log(obj)

//각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum);  //key를 뽑아서 배열로
const number = Object.values(areaNum);  //value를 뽑아서 배열로
console.log(area)
console.log(number)