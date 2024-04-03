// interface Todo {
//   id: number;
//   text: string;
//   done: boolean;

import { Todo } from "../../types/interface";

// }
interface Props {
  todo: Todo;
  toggle: (id: number) => void;
}
export default function TodoItem({ todo, toggle }: Props) {
  return (
    <>
      {todo.done === false && (
        <li>
          <label>
            <input type="checkbox" onChange={() => toggle(todo.id)} />
            {todo.text}
          </label>
        </li>
      )}
    </>
  );
}
