import React, { Component } from "react";

const Pin = ({ data: { images } }) => {
	return (
		<div className="col">
			<img src={images["236x"].url} />
		</div>
	);
};
// comment out all your code
// don't do excessive destructuring
// pass to components only the informaiton that they need
// this component is only a functional component so you don't need to import component
export default Pin;
