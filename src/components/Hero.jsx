import React from "react";
import classes from "./Hero.module.css";

const Hero = ({ name }) => {
	return (
		<li className={classes.hero}>
			<img src={`../img/heroes/${name.replaceAll(" ", "")}.jpg`} />
			<span>{name.toUpperCase()}</span>
		</li>
	);
};

export default Hero;
