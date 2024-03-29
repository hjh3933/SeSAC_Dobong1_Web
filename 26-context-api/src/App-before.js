import { useState } from "react";
import Box from "./components/Box";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import { AgeContext } from "./context/AgeContext";
import Profile from "./components/Profile";

function App() {
  const { name, setName } = useState("");
  const { age, setAge } = useState(20);
  return (
    <div className="App">
      <h2>Hi</h2>
      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>
      <UserContext.Provider value={{ name, setName }}>
        <AgeContext.Provider value={{ age, setAge }}>
          <Profile />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
