import React, { useState } from "react";
import Todo from "../models/todos";

type todoContexObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type Props = {
  children?: React.ReactNode;
};
export const TodoContext = React.createContext<todoContexObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContexProvider = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevState) => {
      return [new Todo(text), ...prevState];
    });
  };
  const onRemoveTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };
  const contextValue: todoContexObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemoveTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContexProvider;
