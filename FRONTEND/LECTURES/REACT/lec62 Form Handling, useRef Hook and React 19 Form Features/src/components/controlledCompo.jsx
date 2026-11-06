import { useState } from "react";

function ControlledCompo() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({ name: "hiii", email: "", password: "" });
  //   initial value

  function handleInput(e) {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function signup(e) {
    e.preventDefault()
    console.log(form);
  }

  console.log("re-render");
  return (
    <div>
      <h3>React Form Handling (ControlledCompo)</h3>
      <form action="" onSubmit={(e) => signup(e)}>
        <div id="name-div">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onInput={(e) => handleInput(e)}
          />
        </div>
        <div id="email-div">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onInput={(e) => handleInput(e)}
          />
        </div>
        <div id="password-div">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onInput={(e) => handleInput(e)}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default ControlledCompo;
