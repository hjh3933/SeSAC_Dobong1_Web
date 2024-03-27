import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();
  console.log(modeParams.get("mode")); //dark

  return (
    <main className={`MainPage ${modeParams.get("mode")}`}>
      <h2>여기는 홈입니다</h2>
      <button
        onClick={() => {
          setModeParams({ mode: "dark" });
        }}
      >
        Dark mode
      </button>
    </main>
  );
}
