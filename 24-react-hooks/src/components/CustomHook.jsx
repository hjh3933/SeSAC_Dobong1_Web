import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  const [isOpen, setIsOpen] = useToggle(true);
  return (
    <>
      <h3>custom hook 사용해보기</h3>
      <div onClick={setIsOpen}>Q. react에서 custom hook만들 수 있나요?</div>
      {isOpen && <div>A. 네!!</div>}
    </>
  );
}
