import React, { useContext } from "react";
import { TodoContext } from "../store/todos-contex";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
type Props = {
  children?: React.ReactNode;
};
const Todos = (props: Props) => {
  const todosCtx = useContext(TodoContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          ></TodoItem>
        );
      })}
    </ul>
  );
};

export default Todos;
