import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const getNote = () => {
    console.log("hello");
  };
  return (
    <div className="App">
      <div>MERN NOTES</div>
      <div>
        <button onClick={getNote}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
