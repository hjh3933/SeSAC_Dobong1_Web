// 모듈만들기 export(es6)
// 한번에 내보내기

const flower = ['rose', 'sunflower', 'tulip'];
function getFlowers(idx) {
    if(idx>=flower.length||idx<0) return 'X'
    return flower[idx];
}

// export {flower, getFlowers}
export {flower as flr, getFlowers as getFlr}    //as 별칭으로 내보내기 가능
