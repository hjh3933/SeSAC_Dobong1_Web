import { useState } from "react";

//값이 안들어오면 false로 초기화?
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
}
