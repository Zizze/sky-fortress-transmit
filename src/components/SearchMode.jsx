import React from "react";
import SelectComponent from "./UI/SelectComponent";
import { searchModes } from "../constants";
import classes from "./SearchMode.module.css";

const SearchMode = ({ currentMode, setCurrentMode }) => {
	const searchModesMap = searchModes?.map((option) => ({
		value: option,
		label: option.toUpperCase(),
	}));

	return (
		<div className={classes.wrapper}>
			<SelectComponent
				classNames={classes["search-mode"]}
				value={currentMode}
				onChange={(e) => setCurrentMode(e)}
				placeholder="Select type of search.."
				name="Select type of search.."
				options={searchModesMap}
				isClearable={false}
			/>
		</div>
	);
};

export default SearchMode;
