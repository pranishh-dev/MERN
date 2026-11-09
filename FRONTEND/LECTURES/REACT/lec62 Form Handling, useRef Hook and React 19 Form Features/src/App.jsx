import { useState } from "react";
import "./App.css";
import ControlledCompo from "./components/controlledCompo";
import UnControlledCompo from "./components/uncontrolledCompo";
import TestUseRef from "./components/testUseRef";


function App() {
  
  return (
    <>
    <ControlledCompo/>
    <UnControlledCompo/>
    <TestUseRef/>
    </>
  );
}

export default App;
