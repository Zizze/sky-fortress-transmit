import React from "react";
import classes from "./Footer.module.css";
import { urlExelTable } from "../constants";

const Footer = () => {
	return (
		<footer className={classes.tablelink}>
			<a href={urlExelTable} target="_blank" rel="full statistics on google excel">
				<img src="./img/svg/excel.svg" alt="excel logo" />
				<span>The table can also be found at this link.</span>
			</a>

			<p className={classes.update}>Site updated 20.01.2024</p>
		</footer>
	);
};

export default Footer;
