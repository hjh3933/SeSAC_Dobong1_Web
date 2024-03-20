import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import {
  PracticeProps1,
  PracticeProps2,
  PracticeProps3,
} from "./components/PracticeProps";
import "./App.css";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import { PracticeState, PracticeState2 } from "./components/PracticeState";
import PororoObj from "./components/Practice/PororoObj";
import PropsMap from "./components/PropsMap";
import Alphabet from "./components/Alphabet";
import MapFilterPrac from "./components/MapFilterPrac";
import MapFilterPrac3 from "./components/MapFilterPrac3";
import PracticeMap2 from "./components/PracticeMap2";

function App() {
  // alert이벤트 작성
  function btnClick() {
    console.log("콘솔 띄우기 성공!");
  }
  // const objArr = [
  //   {
  //     name: "뽀로로",
  //     age: "7",
  //     nickname: "사고뭉치",
  //   },
  //   {
  //     name: "루피",
  //     age: "5",
  //     nickname: "공주님",
  //   },
  //   {
  //     name: "크롱",
  //     age: "4",
  //     nickname: "장난꾸러기",
  //   },
  // ];
  const dataArr = [
    { name: "peach", number: 5, price: 5000 },
    { name: "banana", number: 1, price: 3000 },
    { name: "apple", number: 10, price: 7000 },
    { name: "grape", number: 2, price: 8500 },
  ];
  return (
    <div>
      <h1>0320 map과 filter사용</h1>
      {/* <PropsMap arr={dataArr}></PropsMap>
      <hr></hr> */}
      {/* <Alphabet></Alphabet>
      <hr></hr> */}
      <h1>실습문제</h1>
      {/* <MapFilterPrac />
      <hr></hr> */}
      {/* <MapFilterPrac3 /> */}
      <PracticeMap2 />
      {/* <h1>hello, props</h1> */}
      {/* <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="skyblue" nickname="사고뭉치" />
      <ClassProps2 name="포비" color="beige" nickname="곰" bgColor="black" />
      <FunctionProps name="사과" count={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2> */}
      {/* <hr></hr> */}
      {/* 실습문제 */}
      {/* <PracticeProps1 food="치킨" />
      <PracticeProps2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
      <PracticeProps3 text="이건 지정한 text입니다!!" valid={btnClick} /> */}
      {/* <h1>hello, state</h1>
      <ClassState />
      <FunctionState />
      <h1>State Practice</h1>
      <PracticeState />
      <hr />
      <PracticeState2 objArr={objArr} />
      <hr />
      <PororoObj /> */}
    </div>
  );
}

export default App;
