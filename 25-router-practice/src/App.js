import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/common.css";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Student from "./pages/Student";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/student/:studentName" element={<Student />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
