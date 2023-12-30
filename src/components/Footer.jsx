import React from "react";
import classes from "./Footer.module.css";
import { urlExelTable } from "../constants";

const Footer = () => {
	return (
		<footer className={classes.tablelink}>
			<img src="./img/svg/excel.svg" alt="excel logo" />
			<a href={urlExelTable} target="_blank" rel="full statistics on google excel">
				The table can also be found at this link.
			</a>
		</footer>
	);
};

export default Footer;
