
import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';


function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Tooltip Example</h2>

      <Tooltip text="This is a tooltip for a button">
        <button>Hover over me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip for an image">
        <img
          src="https://via.placeholder.com/100"
          alt="Example"
          style={{ cursor: "pointer" }}
        />
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip for a text">
        <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
          Hover over this text
        </span>
      </Tooltip>
    </div>
  );
}

export default App;
