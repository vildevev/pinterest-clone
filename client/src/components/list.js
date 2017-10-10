import React, { Component } from "react";
import Pin from "./pin";

class List extends Component {
	componentDidMount() {
		window.addEventListener("scroll", this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll, false);
	}

	// if bottom of page is reached it queries the API again to get more objects.
	onScroll = () => {
		if (
			window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
			this.props.data.length
		) {
			this.props.fetchWidgets();
		}
	};

	// maps over the current objects, passing their data as props to a 'pin' component
	render() {
		const { data } = this.props;
		return Object.keys(data).map(index => {
			return <Pin key={data[index].id} data={data[index]} />;
		});
	}
}

export default List;
