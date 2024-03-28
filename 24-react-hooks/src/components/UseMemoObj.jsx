import { useEffect, useMemo, useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  // 어떤 state가 변경되면 컴포넌트가 다시 읽힌다
  //obj는 주소가 다른곳으로 매번 저장되고 주소값으로 비교하기 때문에 다른값 즉 바뀌었다고
  //   인식해서 콘솔에 계속 뜨는 것이다
  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };
  //   const location = isKorea ? "한국" : "외국"; 이렇게 문자열로 저장하면 input창이 변경되는 것으로 콘솔에 뜨지않는다
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);
  //useMemo로 isKorea가 변경될 때만 주소가 저장되도록해서 obj형태여도 콘솔에 뜨지 않는다
  //useMemo는 메모리 과부하를 줄 수 있어 되도록이면 지양하는 것이 좋다(위의 변수처럼저장하는게 베스트)
  useEffect(() => {
    console.log("location이 바뀔 때마다 실행됩니다");
  }, [location]);
  return (
    <>
      <h3>UseMemo와 Object</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <div>{location.country}</div>
      <button onClick={() => setIsKorea(!isKorea)}>나라바꾸기</button>
    </>
  );
}
