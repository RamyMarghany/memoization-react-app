import React from "react";
import "./styles.css";
import Addition from "./components/index";
export default function App() {
  return (
    <div className="App">
      <h3 className="mb-4 mt-2">Memoization</h3>
      <p>make a simple react app to apply a Memoization concept</p>
      <Addition />
    </div>
  );
}
