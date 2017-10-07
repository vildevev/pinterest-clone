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

	componentDidMount() {
		axios
			.get("http://localhost:3000/pins/index")
			.then(response => this.setState({ data: response.data }));
	}
	renderWidgets() {
		for (var object in this.state.data) {
			return (
				<Pin key={this.state.data[object].id} data={this.state.data[object]} />
			);
		}
	}
	render() {
		return <div>{this.renderWidgets()}</div>;
	}
}

export default Widget;
