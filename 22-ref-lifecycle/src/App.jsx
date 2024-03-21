import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";
import RefPrac1 from "./components/RefPrac1";
import RefPrac2 from "./components/RefPrac2";

function App() {
  return (
    <div>
      <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />
      <hr />
      <h1>Ref Prac1</h1>
      <RefPrac1 />
      <h1>Ref Prac2</h1>
      <RefPrac2 />
    </div>
  );
}

export default App;
