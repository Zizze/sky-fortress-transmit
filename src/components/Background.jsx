import React from "react";
import classes from "./Background.module.css";

const Background = () => {
	return (
		<div className={classes.background}>
			<img src="./img/art.png" alt="background art" />
		</div>
	);
};

export default Background;
