import React, { Component } from "react";
import axios from "axios";
import List from "./list";

class Widget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			pageNum: 1
		};

		this.fetchWidgets = this.fetchWidgets.bind(this);
	}

	componentDidMount() {
		this.fetchWidgets();
	}

	updateState = response => {
		if (this.state.pageNum !== 6) {
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

	render() {
		return (
			<div>{<List {...this.state} fetchWidgets={this.fetchWidgets} />}</div>
		);
	}
}

export default Widget;

