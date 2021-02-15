import React from "react";
import ReactDom from "react-dom"
import { ModuleFilenameHelpers } from "webpack";
import App from "./App";

ReactDom.render(<h1>This is my project</h1>,document.getElementById("root"))

function myinfo(){
  return (
    <div> <h1> students </h1>
         <p>learning React with jsx</p>
         <ul>
            <li>html</li>
            <li>css</li>
            <li>java script</li>
         </ul>
    </div>
  )  
}
ReactDom.render(myinfo,document .getElementById("root"))
ReactDom.render(App,document.getElementById("footer"))
