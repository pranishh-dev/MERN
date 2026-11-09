import React from "react";

export const Input = ({ todo, setTodo, AddTodo }) => {
  return (
    <form action="" onSubmit={AddTodo}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
