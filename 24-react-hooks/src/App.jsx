import CustomHook from "./components/CustomHook";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import Form from "./components/UseForm";
import UseFormPrac1 from "./components/UseFormPrac1";
import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("React hook!");
  return (
    <>
      <h1>React Hook</h1>
      {/* <UseMemo />
      <UseMemoObj /> */}
      {/* <UseCallback />
      <UseCallback2 /> */}
      {/* <UseReducer />
      <CustomHook /> */}
      <Form />
      <hr />
      <UseFormPrac1 />
    </>
  );
}

export default App;
