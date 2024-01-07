import React from "react";
import classes from "./Table.module.css";

const Table = ({ searchResults }) => {
	return (
		<table className={classes.table}>
			<thead>
				<tr>
					<th>CHARACTER</th>
					<th>LOCATION RARITY</th>
					<th>LOCATION NAME</th>
					<th>OPTION</th>
				</tr>
			</thead>
			<tbody>
				{searchResults.map((heroData) => {
					if (heroData.hero === "new1" || heroData.hero === "tsukuyo") return;
					return (
						<tr
							key={`${heroData.location}${heroData.option}`}
							style={{
								backgroundColor:
									heroData.rarity.toLowerCase() === "mythic"
										? "#E2BF83"
										: heroData.rarity.toLowerCase() === "rare"
										? "#93BBE9"
										: "#BDC2CF",
							}}
						>
							<td>{heroData.hero}</td>
							<td>{heroData.rarity}</td>
							<td>{heroData.location}</td>
							<td>{heroData.option}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
