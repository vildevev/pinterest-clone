import React, { Component } from "react";
import axios from "axios";
import List from "./list";

class Widget extends Component {
	constructor(props) {
		super(props);

		// the 'data' represents the objects that will currently be displayed on the page
		this.state = {
			data: [],
			pageNum: 1
		};

		this.fetchWidgets = this.fetchWidgets.bind(this);
	}

	// Will get triggered when page loads
	componentDidMount() {
		this.fetchWidgets();
	}

	// Make sure it grabs the next objects by incrementing which 'page' is queried every time. If last one is reached (number 7 in this case) it will restart at 1 again.
	updateState = response => {
		if (this.state.pageNum !== 7) {
			this.setState({
				data: this.state.data.concat(response.data),
				pageNum: (this.state.pageNum += 1)
			});
		} else {
			this.setState({
				data: this.state.data.concat(response.data),
				pageNum: 1
			});
		}
	};

	fetchWidgets = () => {
		axios
			.get(`http://localhost:3000/pins?page=${this.state.pageNum}`)
			.then(response => this.updateState(response));
	};

	// Passes the objects to the list component as props, as well as the rendering of widgets function.
	render() {
		return (
			<div>{<List {...this.state} fetchWidgets={this.fetchWidgets} />}</div>
		);
	}
}

export default Widget;
