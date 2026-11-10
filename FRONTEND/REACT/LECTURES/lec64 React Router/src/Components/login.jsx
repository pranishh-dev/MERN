import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
    console.log("HI");
  }
  return (
    <React.Fragment>
        <h1>LOGIN PAGE</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="" id="" />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};
