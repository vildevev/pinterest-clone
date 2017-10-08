import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Pin from "./components/pin";
import Scroll from "./components/scroll";
import Widget from "./components/widget";

const App = () => {
	return (
		<div>
			<Widget />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
