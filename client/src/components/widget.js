import React, { Component } from "react";
import axios from "axios";

import Pin from "./pin";

class Widget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {}
		};
	}

	// api/pins?results=25interval=1 (26-50)
	// change your route so that it is under /pins/index
	componentDidMount() {
		axios
			.get("http://localhost:3000")
			.then(response => this.setState({ data: response.data }));
	}

	renderWidgets() {
		return Object.keys(this.state.data).map(index => {
			return (
				<Pin key={this.state.data[index].id} data={this.state.data[index]} />
			);
		});
	}
	render() {
		return <div className="widget">{this.renderWidgets()}</div>;
	}
}

export default Widget;

// Make a <RenderPins /> component
// Give components GREAT names
