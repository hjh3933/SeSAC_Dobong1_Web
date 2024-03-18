// export function FunctionProps(props) {
//   //   props = {
//   //     name: "사과",
//   //     price: 1000,
//   //     count: 5,
//   //   };
//   return (
//     <div>
//       <h5>{props.name}</h5>
//       <p>
//         {props.count}개에 {props.price}원
//       </p>
//       <hr />
//     </div>
//   );
// }
// export function FunctionProps(props) {
//   const { name, count: number, price } = props;
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number}개에 {price}원
//       </p>
//       <hr />
//     </div>
//   );
// }
export function FunctionProps({ name, count, price }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {count}개에 {price}원
      </p>
      <hr />
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, count, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {count}개에 {price}원
      </p>
      <div>{props.children}</div>
      <hr />
    </div>
  );
}
//컴포넌트이름.defaultProps = {기본값 정의할 데이터 객체로 표현}
FunctionProps2.defaultProps = {
  count: 3,
  name: "샤인머스켓",
};
