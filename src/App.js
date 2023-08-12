import "./App.css";
import React from "react";

function App() {
  return (
    <div className="Upload">
      <form>
        <h1>Upload files here:</h1>
        <input type="file" />
        <button type="submit"> Upload </button>
      </form>
      <h2>Some Change</h2>
    </div>
  );
}

export default App;
