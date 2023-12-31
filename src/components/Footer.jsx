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
		</footer>
	);
};

export default Footer;
