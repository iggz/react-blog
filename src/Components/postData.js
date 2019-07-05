import React from "react";
import propTypes from "prop-types";

const PostData = props => {
	const { postData } = props;
	console.log("asdf", postData);
	return (
		<>
			<h1>{postData.post_title}</h1>
			<p>{postData.post}</p>
		</>
	);
};

export default PostData;

PostData.propTypes = {
	postData: propTypes.object
};
