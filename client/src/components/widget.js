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
		return Object.keys(this.state.data).map(index => {
			return (
				<Pin key={this.state.data[index].id} data={this.state.data[index]} />
			);
		});
	}
	render() {
		return <div>{this.renderWidgets()}</div>;
	}
}

export default Widget;
