import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { deposit, withdraw } from "../store/module/moneyReducer";

export function Practice1() {
  const money = useSelector((state) => state.money);
  const numberRef = useRef();
  const dispatch = useDispatch();

  function depositFunc() {
    dispatch(deposit(Number(numberRef.current.value)));
    numberRef.current.value = "";
    numberRef.current.focus();
  }

  function withdrawFunc() {
    dispatch(withdraw(Number(numberRef.current.value)));
    numberRef.current.value = "";
    numberRef.current.focus();
  }

  return (
    <div>
      <h2>코딩온 은행</h2>
      <h3>잔액: {money}원</h3>
      <input type="number" ref={numberRef} step={100} />
      <button onClick={depositFunc}>입금</button>
      <button onClick={withdrawFunc}>출금</button>
    </div>
  );
}
