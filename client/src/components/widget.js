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
			.get("https://vildes-pinterest-clone.herokuapp.com/pins/index#", {
				headers: {
					"Access-Control-Allow-Origin": "*"
				}
			})
			.then(response => this.setState({ data: response }));
	}

	renderWidgets() {
		return this.state.data.map(widget => {
			return <Pin key={widget.id} data={widget} />;
		});
	}
	render() {
		return <div>{this.renderWidgets()}</div>;
	}
}

export default Widget;
