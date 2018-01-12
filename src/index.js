import React from "react";
import ReactDOM from "react-dom";

const HelloMessage = ({name}) => 
 (<div>Hello, {name}</div>);

ReactDOM.render(<HelloMessage name="World!" />, document.getElementById("app"));
