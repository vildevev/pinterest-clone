import React, { Component } from "react";
import axios from "axios";

import Pin from "./pin";

class Widget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:3000/pins/index")
			.then(response => this.setState({ data: response.data }));
	}
	renderWidgets() {
		return this.state.data.map(widget => {
			return <Pin key={widget.id} data={widget.description} />;
		});
	}
	render() {
		return <div>{this.state.data}</div>;
	}
}

export default Widget;
