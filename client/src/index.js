import React, { Component } from "react";
import ReactDOM from "react-dom";

import Pin from "./components/pin";
import Scroll from "./components/scroll";
import Widget from "./components/widget";

const App = () => {
	return (
		<div>
			<Scroll />
			<Widget props={<Pin />} />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
