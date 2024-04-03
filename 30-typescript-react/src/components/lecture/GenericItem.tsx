import { GTodo } from "../../types/interface";

interface Props<T> {
  todos: GTodo<T>;
  toggle: (id: number) => void;
}
export default function GenericItem<T>({ todos, toggle }: Props<T>) {
  return (
    <ul>
      {/* <li>item</li>
      {todos.map((todo) => {
        return (
          <li>
            <label>
              <input type="checkbox" onChange={() => toggle(todo.id)} />
              {String(todo.text)}
            </label>
          </li>
        );
      })} */}
    </ul>
  );
}
