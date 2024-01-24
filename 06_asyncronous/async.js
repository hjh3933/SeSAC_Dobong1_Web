//promise
let product, price; //undefind상태
function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민...");
}

function pickDrink() {
  //3초 고민
  //promise객체를 이용하는 방식입니다! (내장된객체)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민끝!");
      product = "콜라";
      price = 2000;
      resolve("구매완료!!");
    }, 3000);
  });
}
function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
//비동기를 동기로
async function execute() {
  goMart();
  //pickDrink를 기다려주세요
  await pickDrink();
  pay();
}
execute();
