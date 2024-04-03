import React from "react";

//children을 사용할 때는 반드시 아래 타입으로 설정해야함!!!
interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <div style={{ border: "1px dotted yellowgreen" }}>{children}</div>;
}
