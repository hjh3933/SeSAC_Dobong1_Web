import { FunctionProps } from "./FunctionProps";

export default function PropsMap({ arr }) {
  console.log(arr);
  return (
    <div>
      {arr?.map((el, index) => {
        return (
          <ul key={index}>
            <li>이름: {el.name}</li>
            <li>개수: {el.number}</li>
            <li>가격: {el.price}</li>
          </ul>
        );
      })}

      {/* undefind가 아닐때만 map이 작동하도록 함 => ? */}
      {arr?.map((el, index) => {
        return (
          <FunctionProps
            // key={index}
            name={el.name}
            price={el.price}
            number={el.number}
          ></FunctionProps>
        );
      })}
      {!arr && <h1>배열이 전달되지 않았습니다.</h1>}
    </div>
  );
}
