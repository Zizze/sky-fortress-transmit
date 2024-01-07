import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Table from "./tableResult/Table";
import classes from "./SearchField.module.css";

const SearchField = ({ data }) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isEmpty, setIsEmpty] = useState(false);

	useEffect(() => {
		if (!!!searchValue) return;
		setIsEmpty(!!!searchResults.length);
	}, [searchResults]);

	const handleInputChange = () => {
		// Фильтруем данные на основе введенного значения
		const filteredResults = [];

		for (const rarity of Object.keys(data)) {
			for (const location of data[rarity]) {
				for (const option of location.options) {
					for (const hero of option.heroes) {
						if (hero.toLowerCase().includes(searchValue.toLowerCase())) {
							const existingResult = filteredResults.find(
								(result) =>
									result.hero === hero &&
									result.location === location.name &&
									result.rarity === rarity
							);

							if (existingResult) {
								// Если существующая строка найдена, добавляем опцию к существующему объекту
								existingResult.option = `${existingResult.option}, ${option.name}`;
							} else {
								// В противном случае добавляем новую строку
								filteredResults.push({
									hero: hero,
									option: option.name,
									location: location.name,
									rarity: rarity,
								});
							}
						}
					}
				}
			}
		}

		setSearchResults(filteredResults);
	};

	return (
		<>
			<div className={classes.search}>
				<div className={classes["search__input"]}>
					<input
						onKeyDown={(e) => e.key === "Enter" && handleInputChange()}
						name="search hero"
						value={searchValue}
						onChange={(e) => {
							const value = e.target.value;
							setSearchValue(value);
						}}
						type="text"
						placeholder="Enter hero..."
						maxLength={14}
					/>
					{!!searchValue.length && (
						<span
							onClick={() => {
								setSearchResults([]);
								setSearchValue("");
							}}
						>
							<IoClose />
						</span>
					)}
				</div>
				<button disabled={!(searchValue.length > 2)} onClick={() => handleInputChange()}>
					Search
				</button>
			</div>
			{!!searchResults.length && <Table searchResults={searchResults} />}
			{isEmpty && <p className={classes.empty}>Nothing found.</p>}
		</>
	);
};

export default SearchField;
