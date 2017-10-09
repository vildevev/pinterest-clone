// switch up display to only set state of first 6 things
// then fetchWidgets doesn't reset state but rather updates state adding the new things (next 6 thing)
// new state causes rerender and more scroll to abound. YAYA funky scrool town

import React, { Component } from "react";
import axios from "axios";
import Pin from "./pin";

class Widget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {}
		};

		this.fetchWidgets = this.fetchWidgets.bind(this);
		this.onClickSearch = this.onClickSearch.bind(this);
	}

	// api/pins?results=25interval=1 (26-50)
	// change your route so that it is under /pins/index
	// componentDidMount() {
	// 	axios
	// 		.get("http://localhost:3000/pins/index")
	// 		.then(response => this.setState({ data: response.data }));
	// }

	onClickSearch = e => {
		e.preventDefault();
		this.fetchWidgets();
	};

	fetchWidgets = () => {
		console.log("fetching Widgets n Shit");
		axios
			.get("http://localhost:3000/pins/index")
			.then(response => this.setState({ data: response.data }));
	};

	// renderWidgets() {
	// 	return Object.keys(this.state.data).map(index => {
	// 		return (
	// 			<Pin key={this.state.data[index].id} data={this.state.data[index]} />
	// 		);
	// 	});
	// }
	render() {
		return (
			<div>
				<form type="submit" onSubmit={this.onClickSearch}>
					<button type="submit">Click</button>
				</form>
				<div className="widget">
					{<List {...this.state} fetchWidgets={this.fetchWidgets} />}
				</div>
			</div>
		);
	}
}

class List extends Component {
	renderWidgets() {
		return Object.keys(this.props.data).map(index => {
			return (
				<Pin key={this.props.data[index].id} data={this.props.data[index]} />
			);
		});
	}

	onClickSearch = e => {
		e.preventDefault();
		this.fetchWidgets();
	};

	componentDidMount() {
		window.addEventListener("scroll", this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll, false);
	}

	onScroll = () => {
		if (
			window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
			this.props.data.length
		) {
			console.log("bottom");
			// this.fetchWidgets();
			this.props.fetchWidgets();
		}
	};

	render() {
		const { data } = this.props;
		return Object.keys(data).map(index => {
			return <Pin key={data[index].id} data={data[index]} />;
		});
	}
}

export default Widget;

// Make a <RenderPins /> component
// Give components GREAT names
