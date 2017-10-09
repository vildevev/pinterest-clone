import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Widget from "./components/widget";

const App = () => {
	return (
		<div>
			<Widget />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
