import { useState } from "react";
import { AgeContext } from "../../context/AgeContext";
import { UserContext } from "../../context/UserContext";

export default function NameProvider({ children }) {
  const [name, setName] = useState("홍길동");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
