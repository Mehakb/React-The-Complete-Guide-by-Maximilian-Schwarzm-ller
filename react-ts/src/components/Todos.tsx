import { FC, useContext } from "react"
import { TodoContext } from "../store/todos-context"
import TodoItem from "./TodoItem"

import classes from "./Todos.module.css"

const Todos: FC = () => {
  const todoCtx = useContext(TodoContext)
  return <ul className={classes.todos}>
    {todoCtx.todos.map(item => <TodoItem item={item.text} key={item.id} id={item.id} />)}
  </ul>
}

export default Todos