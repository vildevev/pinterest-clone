import React, { Component } from "react";

const Pin = ({ data: { images } }) => {
	return (
		<div>
			<img src={images["136x136"].url} />
		</div>
	);
};
export default Pin;
