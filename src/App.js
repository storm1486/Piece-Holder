import "./App.css";
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div className="Upload">
      <form>
        <h1>Upload files here:</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit"> Upload </button>
      </form>
    </div>
  );
}

export default App;
