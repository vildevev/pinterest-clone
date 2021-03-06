import React from "react";

// A simple functional component that simply displays the image property of the json object
const Pin = ({ data: { images, description } }) => {
	return (
		<div>
			<img src={images["236x"].url} alt={description} />
		</div>
	);
};

export default Pin;
