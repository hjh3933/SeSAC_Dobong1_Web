import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/module/todo";
import { useRef } from "react";
import { RootState } from "../interface";

export default function TodoList() {
  const lists = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();
  const todoRef = useRef<HTMLInputElement>(null);
  const nextID = useSelector((state: RootState) => state.todo.nextID);
  // console.log(lists);
  // console.log(list[0].text); //접근법
  const todoList = lists.filter((list) => {
    return list.done === false;
  });
  const createTodo = () => {
    if (todoRef.current) {
      if (nextID) {
        dispatch(
          create({
            id: nextID,
            text: todoRef.current.value,
          })
        );
        todoRef.current.value = "";
      }
    }
  };
  return (
    <section className="TodoList">
      <h2>Today Todo</h2>
      <div>
        <input type="text" placeholder="Todo" ref={todoRef} />
        <button onClick={createTodo}>ADD</button>
      </div>
      {/* state관리 예정 */}
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => dispatch(done(todo.id))}>DONE</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
