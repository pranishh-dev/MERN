import { useState } from "react";

import "./App.css";
import { Routes, Route, useNavigate } from "react-router";

function Home() {
  return <h1>Home</h1>;
}
function NotFound(){
  return <h1>Not found</h1>
}

function App() {
  let navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/videos/:id" element={<Home />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <button onClick={() => navigate(1)}>forward</button>
      <br />
      <button onClick={() => navigate(-1)}>backward</button>
    </>
  );
}

export default App;
