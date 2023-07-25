import React, { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-contex";

const NewTodo = () => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault(); // prevent form from submitting to server
    if (
      !todoTextInput ||
      !todoTextInput.current ||
      todoTextInput.current?.value.trim().length === 0
    )
      throw new Error("Invalid input");
    todoCtx.addTodo(todoTextInput.current!.value);
    todoTextInput.current!.value = "";
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor="text">Todo Text: </label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
