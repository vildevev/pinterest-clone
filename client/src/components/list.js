import React, { Component } from "react";
import Pin from "./pin";

class List extends Component {
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

export default List;
