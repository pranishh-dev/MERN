import { useRef } from "react";
import { useState } from "react";

function TestUseRef() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  function signup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));


    nameRef.current.style.color = "red"
    // emailRef.current.style.display = "none"
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  }
  console.log("re-render");

  return (
    <div>
      <h3>React Form Handling (UnControlledCompo)</h3>
      <form action="" onSubmit={(e) => signup(e)}>
        <div id="name-div">
          <label htmlFor="name">Name: </label>
          <input ref={nameRef} type="text" name="name" id="name" />
        </div>
        <div id="email-div">
          <label htmlFor="email">Email: </label>
          <input
            ref={emailRef}
            defaultValue="pailakoemail@gmail.com"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div id="password-div">
          <label htmlFor="password">Password: </label>
          <input ref={passRef} type="password" name="password" id="password" />
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

export default TestUseRef;
