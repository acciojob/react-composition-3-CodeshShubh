
import React from "react";
import Tooltip from "./Tooltip";
import './../styles/App.css';

const text1  = 'for tool tip h2';

const text2 = 'for tool tip p';



function App() {
  return (
    <div>
        <Tooltip text = {text1} content = {<h2>this is first </h2>}/>
        <Tooltip text = {text2} content= {<p>this is second</p>}/>
    </div>
  );
}

export default App;
