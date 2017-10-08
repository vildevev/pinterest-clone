import React, { Component } from "react";

const Pin = ({ data: { images } }) => {
	return (
		<div>
			<div>
				<img src={images["236x"].url} />
			</div>
		</div>
	);
};
export default Pin;
