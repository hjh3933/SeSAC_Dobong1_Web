const initialState = 0;
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

//action을 return하는 함수를 내보내서 문자열 오타로 인한 오류를 방지할 수 있음
export const countMinus = () => {
  return { type: DECREMENT };
};
export const countPlus = () => {
  return { type: INCREMENT };
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
