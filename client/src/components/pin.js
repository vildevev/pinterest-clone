import React from "react";

const Pin = ({ data: { images, description } }) => {
	return (
		<div>
			<img src={images["236x"].url} alt={description} />
		</div>
	);
};

export default Pin;
