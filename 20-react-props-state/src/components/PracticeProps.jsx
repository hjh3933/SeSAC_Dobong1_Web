import img from "../bookImg.png";

export function PracticeProps1({ food }) {
  const divStyle = {
    color: "red",
  };
  return (
    <div>
      <h3>
        소개할 음식은 <span style={divStyle}>{food}</span>입니다
      </h3>
      <ul>
        <li>이유: 튀김옷이 바삭하고 닭이 부드럽습니다</li>
        <li>가장 좋아하는 가게: 썬더치킨</li>
      </ul>
    </div>
  );
}

export function PracticeProps2({ title, author, price, type }) {
  return (
    <div className="container">
      <h2 className="orange">이번주 베스트셀러</h2>
      <div className="content">
        <img src={img} alt="책사진" />
        <div>{title}</div>
        <div>저자: {author}</div>
        <div>판매가: {price}원</div>
        <div>구분: {type}</div>
      </div>
    </div>
  );
}
export function PracticeProps3({ text, valid }) {
  return (
    <div>
      <h3>{text}</h3>
      <button onClick={valid}>콘솔 메시지</button>
    </div>
  );
}

PracticeProps3.defaultProps = {
  text: "이건 기본 text props입니다",
};
