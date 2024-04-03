import { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/interface";

// interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }
export default function TodoList() {
  const inputRef = useRef<HTMLInputElement>(null);
  //Todo 리스트 전체를 담을 state배열
  const [todos, setTodos] = useState<Todo[]>([]);
  //새로운 Todo text를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updateTodo = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      //   console.log(updateTodo);
      setTodos(updateTodo);
      setNewTodo("");
    }
    focusInput();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };
  const toggleComplete = (id: number) => {
    //
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodo);
    // console.log(todos);
  };
  //input창에 focus
  const focusInput = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <h4>Todo List</h4>
      <input
        type="text"
        placeholder="Todo..."
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={focusInput}>focus</button>

      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} toggle={toggleComplete} />;
        })}
      </ul>

      <h4>done list</h4>
      <ul>
        {todos.map((todo) => {
          return todo.done === true && <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}
