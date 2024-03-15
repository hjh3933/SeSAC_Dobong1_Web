//함수형 컴포넌트 진행
export function PracticeJSX1() {
  const name = "쫑이";
  const animal = "강아지";
  return (
    <div>
      <h2>
        제 반려동물의 이름은 <span>{name}</span>입니다
      </h2>
      <h2>
        <span>{name}</span>는 <span>{animal}</span>입니다
      </h2>
    </div>
  );
}

export function PracticeJSX2() {
  return <div>3 + 5 = 8 {3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</div>;
}

export function PracticeJSX3() {
  const a = 5;
  const b = 2;
  return <div>{a > b && a + "가 " + b + "보다 큽니다."}</div>;
}

export function PracticeJSX4() {
  const title = "Hello World";
  return (
    <div className="container">
      <div className="title">{title}</div>
      <div className="inputBox">
        <label className="label">
          아이디: <input type="text"></input>
        </label>
        <label className="label">
          비밀번호 : <input type="password"></input>
        </label>
      </div>
    </div>
  );
}
