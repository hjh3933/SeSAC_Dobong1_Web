export default function Input(props) {
  const { setData } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="text를 입력해주세요"
        onChange={(e) => {
          setData((prevData) => {
            return { ...prevData, content: e.target.value };
          });
        }}
      />
    </div>
  );
}
