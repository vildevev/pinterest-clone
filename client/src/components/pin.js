import React, { Component } from "react";

const Pin = ({ data: { description } }) => {
	return (
		<div>
			<p>{description}</p>
		</div>
	);
};
export default Pin;
