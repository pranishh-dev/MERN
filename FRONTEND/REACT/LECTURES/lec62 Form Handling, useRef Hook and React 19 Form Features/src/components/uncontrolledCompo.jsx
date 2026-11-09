import { useState } from "react";

function UnControlledCompo() {
  function signup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  }
  console.log("re-render");

  return (
    <div>
      <h3>React Form Handling (UnControlledCompo)</h3>
      <form action="" onSubmit={(e) => signup(e)}>
        <div id="name-div">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div id="email-div">
          <label htmlFor="email">Email: </label>
          <input
            defaultValue="pailakoemail@gmail.com"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div id="password-div">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </div>
        <div id="isHuman-div">
          <input type="checkbox" defaultChecked name="isHuman" id="isHuman" />
          <label htmlFor="isHuman">Confirm you are a human.</label>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default UnControlledCompo;
