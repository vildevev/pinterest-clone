import React, { Component } from "react";

const Pin = ({ data: { images, title } }) => {
	return (
		<div>
			<img src={images["236x"].url} />
			<p>{title}</p>
		</div>
	);
};
export default Pin;
