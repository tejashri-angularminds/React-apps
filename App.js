import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
