//개행처리하려고 백틱쓴거
const obj = `{
    "model": "아이오닉",
    "price": 50000000,
    "isElectric": true,
    "option": ["사이드미러", "스마트 스크린"]
}`;

console.log(obj);
console.log(typeof obj);
console.log(obj.model); //undefined
console.log("===============OBJECT==================");
//json데이터를 객체로 변경해주는과정 필요
//JSON.parse(실제 json데이터); -> 오브젝트로 변함
const carInfo = JSON.parse(obj);
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);

//JSON.stringfy(객체): object -> json
console.log("=================JSON================");
const carJson = JSON.stringify(carInfo);
console.log("json1", carJson);
const carJson2 = JSON.stringify(carInfo, null, 5);
console.log("json2", carJson2);
console.log(carJson2.model); //undefined json이라서 나오지 않음
