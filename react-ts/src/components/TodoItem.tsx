import { FC, useContext } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./TodoItem.module.css"
const TodoItem: FC<{ item: string, id: string }> = (
  { item, id }) => {
  const todoContext = useContext(TodoContext)
  const removeHandler = () => {
    todoContext.removeTodo(id)
  }
  return (
    <li className={classes.item} onClick={removeHandler}>{item}</li>
  )
}

export default TodoItem;