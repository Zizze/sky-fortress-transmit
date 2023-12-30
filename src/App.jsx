import { useEffect, useState } from "react";
import { locationRarity } from "./data";
import { data } from "./data";
import Background from "./components/Background";
import SelectComponent from "./components/UI/SelectComponent";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PageIndex from "./components/UI/PageIndex";

function App() {
	const [rarity, setRarity] = useState(null);
	const [locationSelected, setLocationSelected] = useState(null);
	const [optionSelected, setOptionSelected] = useState(null);

	const [options, setOptions] = useState([]);

	const [heroesNames, setHeroesNames] = useState([]);

	const rarityList = locationRarity.map((locRar) => ({
		value: locRar,
		label: locRar.toUpperCase(),
	}));

	const locations = data[rarity?.value]?.map((loc) => ({
		value: loc.name,
		label: loc.name.toUpperCase(),
	}));

	const optionSelects = options?.map((option) => ({
		value: option.name,
		label: option.name.toUpperCase(),
	}));

	useEffect(() => {
		if (locationSelected) {
			const filLoc = data[rarity?.value]?.filter((obj) => obj.name === locationSelected.value);
			setOptions(filLoc[0].options);
		} else {
			setOptions(null);
		}
	}, [locationSelected]);

	useEffect(() => {
		if (optionSelected && options.length) {
			const filOptions = options?.filter((option) => option.name === optionSelected.value);
			setHeroesNames(filOptions[0].heroes);
		} else {
			setHeroesNames([]);
		}
	}, [optionSelected]);

	const onChangeLocation = (e) => {
		if (locationSelected && locationSelected?.value === e?.value) return;
		setLocationSelected(e);
		setOptionSelected(null);
		setHeroesNames([]);
	};

	const onChangeRarity = (e) => {
		if (rarity && rarity?.value === e?.value) return;
		setRarity(e);
		setLocationSelected(null);
		setOptionSelected(null);
		setOptions(null);
		setHeroesNames([]);
	};

	const onChangeOption = (e) => {
		setOptionSelected(e);
	};

	return (
		<PageIndex
			title={"Transmits"}
			description={"Find out who you can get for 'Transmit' in the game Sky Fortress"}
		>
			<div className="wrapper">
				<div className="guild-info">
					<span>Guild: PepeChill</span>
					<span>Server: S6 - Mokiksar</span>
				</div>

				<Background />
				<main>
					<h2 className="select__title">Select location</h2>
					<div className="selects">
						<SelectComponent
							value={rarity}
							onChange={onChangeRarity}
							placeholder="Select rarity.."
							defaultValue={rarityList[0]}
							name="location rarity"
							options={rarityList}
						/>

						<SelectComponent
							value={locationSelected}
							onChange={onChangeLocation}
							placeholder="Select location.."
							name="location"
							options={locations}
							isDisabled={!!!rarity}
						/>

						<SelectComponent
							value={optionSelected}
							onChange={onChangeOption}
							placeholder="Select option.."
							name="location options"
							options={optionSelects}
							isDisabled={!!rarity && !!locationSelected ? false : true}
						/>
					</div>

					{!!heroesNames.length && <p className="chance">You have a chance to get:</p>}
					<ul className="hero__list">
						{heroesNames.map((name) => (
							<Hero name={name} key={name} />
						))}
					</ul>
				</main>
				<Footer />
			</div>
		</PageIndex>
	);
}

export default App;
