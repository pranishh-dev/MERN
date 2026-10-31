import React, { useState } from "react";
import { Input } from "./Input";
import { Todos } from "./Todos";

export const TodoApp = () => {
  let [todo, SetTodo] = useState("");
  let [todos, SetTodos] = useState([]);

  function AddTodo(e) {
    e.preventDefault();

    const newTodo = todo.trim();
    if (!newTodo) return;

    SetTodos((prev) => [...prev, newTodo]);
    SetTodo("");
  }
  return (
    <>
      <Input todo={todo} AddTodo={AddTodo} setTodo={SetTodo} />
      <Todos todos={todos} />
    </>
  );
};
