import { FC, FormEvent, useContext, useRef } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css"
const NewTodo: FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoContext = useContext(TodoContext);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todoContext.addTodo(enteredText)
  }
  return <form className={classes.form} onSubmit={submitHandler}>
    <label className={classes.label} htmlFor="text">Todo Text</label>
    <input className={classes.input} type="text" id="text" ref={textInputRef} />
    <button className={classes.button}>Add Todo</button>
  </form>
}

export default NewTodo;