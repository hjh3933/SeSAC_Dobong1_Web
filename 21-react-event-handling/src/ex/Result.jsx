export default function Result(props) {
  const { fruit, background, color, content } = props.data;
  return (
    <div>
      {/* public폴더에 저장후 사용하면 명시하지 않아도 /루트 경로가 public이 된다 */}
      <img src={`/${fruit}.jpg`} alt="과일 사진" width={100} height={100} />
      <div
        style={{
          backgroundColor: background,
          color,
          padding: "10px",
          margin: "10px",
        }}
      >
        {content}
      </div>
    </div>
  );
}
