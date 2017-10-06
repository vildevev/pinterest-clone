import React, { Component } from "react";

class Widget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	// componentDidMount() {
	// 	axios.get("https://");
	// }
	render() {
		return <div>Widget Component</div>;
	}
}
export default Widget;
