import { Create, Done, Payload, TodoState } from "../../interface";

const initialState: TodoState = {
  list: [
    { id: 0, text: "react 공부하기", done: false },
    { id: 1, text: "운동하기", done: false },
    { id: 2, text: "저녁먹기", done: true },
  ],
};

//action설정
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

let count = initialState.list.length;
initialState["nextID"] = count;

export const create = (payload: Payload) => ({
  type: CREATE,
  payload, // {id, text}
});
export const done = (id: number) => ({
  type: DONE,
  id, //number
});
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
