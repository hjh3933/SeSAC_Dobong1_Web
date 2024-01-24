// 모듈 사용 - import
//.js적어야 작동하는듯
import {flr, getFlr} from './04_export1.js';   //따로따로
import * as flowers from './04_export1.js'; //한번에 *
console.log(flr);
console.log(getFlr(2));
//객체가 출력된다.
console.log(flowers);
console.log(flowers.getFlr(0));

import { showAnimals, animals } from './04_export2.js';
console.log(animals);
showAnimals();

//{}구조분해할당 사용하지 X 그냥 가져온다(어차피 하나라서)
import sayHi from './05_exportDefault.js';
sayHi();
