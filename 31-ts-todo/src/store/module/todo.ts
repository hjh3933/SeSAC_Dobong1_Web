import { TodoState } from "../../types/interface";

const initialState: TodoState = {
  list: [
    { id: 0, text: "react 공부하기", done: false },
    { id: 1, text: "운동하기", done: false },
    { id: 2, text: "저녁먹기", done: false },
  ],
};

//action설정
//as: 형변환 as const: type이 string형이 아니고 뒤의 값만 오는 타입으로 정해진다(typeof는 곧 그 값이됨)
const CREATE = "todo/CREATE" as const;
const DONE = "todo/DONE" as const;

let count = initialState.list.length;
initialState["nextID"] = count;

export const create = (payload: { id: number; text: string }) => ({
  type: CREATE,
  payload, // {id, text}
});
export const done = (id: number) => ({
  type: DONE,
  id, //number
});

interface Create {
  type: typeof CREATE;
  payload: { id: number; text: string };
}
interface Done {
  type: typeof DONE;
  id: number;
}
type Action = Create | Done;

export function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") return state;
      return {
        // 전개연산자로 값을 가져옴, 밑에 적은 list로 다른 값은 덮어씌움
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (action.id === li.id) {
            return { ...li, done: true };
          } else {
            return li;
          }
        }),
      };
    default:
      return state;
  }
}
