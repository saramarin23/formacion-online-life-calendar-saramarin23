import React from "react";
import "../stylesheets/App.css";
import Editor from "./Editor";
import Calendar from "./Calendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Editor />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
