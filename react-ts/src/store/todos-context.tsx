import { createContext, FC, useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextObj>({
  todos: [],
  addTodo: (todoText: string) => { },
  removeTodo: (id: string) => { }
})

const TodoContextProvider: FC<{ children: JSX.Element[] }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos(prevState => prevState.concat(newTodo))
  }
  const removeTodoHandler = (id: string) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }
  const todoValue: TodoContextObj = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }
  return <TodoContext.Provider value={todoValue}>{props.children}</TodoContext.Provider>
}

export default TodoContextProvider