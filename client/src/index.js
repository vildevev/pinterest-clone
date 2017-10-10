import React from "react";
import ReactDOM from "react-dom";

import Widget from "./components/widget";

const App = () => {
	return (
		<div>
			<Widget />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
