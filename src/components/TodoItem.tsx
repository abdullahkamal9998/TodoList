import React from "react";
import styles from "./TodoItem.module.css";
type item = {
  text: string;
  onRemoveTodo: () => void;
  children?: React.ReactNode;
};
const TodoItem = (props: item) => {
  return (
    <li className={styles.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
