//call back
let product, price; //undefind상태
function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민...");
}
function pickDrink(callback) {
  //3초 고민
  setTimeout(() => {
    console.log("고민끝!");
    product = "콜라";
    price = 2000;
    callback();
  }, 3000);
}
function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
//비동기
goMart();
//callback으로 넘길때 소괄호 없이 넘겨야함!!!!(넣으면안됨)
pickDrink(pay);
