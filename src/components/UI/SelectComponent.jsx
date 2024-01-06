import Select from "react-select";

const SelectComponent = ({
	value,
	onChange,
	placeholder,
	classNames = "select",
	defaultValue = false,
	name,
	options,
	isDisabled = false,
	isClearable = true,
}) => {
	const stylesSelect = {
		control: (baseStyles, state) => ({
			...baseStyles,
			background: "black",
			cursor: "pointer",
			color: state.isFocused ? "#bc03ff" : "white",
		}),
		clearIndicator: (baseStyles, state) => ({
			...baseStyles,
			color: state.isFocused ? "#bc03ff" : "white",
			":hover": { color: state.isFocused ? "white" : "#bc03ff" },
			padding: 0,
		}),
		dropdownIndicator: (baseStyles, state) => ({
			...baseStyles,
			color: state.isFocused ? "#bc03ff" : "white",
			":hover": { color: state.isFocused ? "#bc03ff" : "white" },
		}),
		indicatorSeparator: (baseStyles, state) => ({
			...baseStyles,
			backgroundColor: state.isFocused ? "#bc03ff" : "white",
		}),

		singleValue: (baseStyles, state) => ({
			...baseStyles,
			color: "inherit",
		}),

		menu: (baseStyles, state) => ({
			...baseStyles,
			color: state.isFocused ? "#bc03ff" : "white",
			":active": "black",
		}),
		placeholder: (baseStyles, state) => ({
			...baseStyles,
			fontWeight: "400",
			color: state.isFocused ? "#bc03ff" : "gray",
		}),
	};

	return (
		<Select
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={classNames}
			classNamePrefix="select"
			defaultValue={defaultValue}
			isDisabled={isDisabled}
			isLoading={false}
			isClearable={isClearable}
			isRtl={false}
			isSearchable={false}
			name={name}
			options={options}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary25: "rgba(196, 194, 196,0.3)",
					primary: "#bc03ff", // selected option
					primary50: "rgba(196, 194, 196,0.3)", // click background

					neutral0: "black", // background modal
					// neutral20: "yellow", // svg unactive
					// neutral50: "yellow", //placeholder
					// neutral60: "yellow", // arrow active
					// neutral80: "yellow", // selected color text
				},
			})}
			styles={stylesSelect}
		/>
	);
};

export default SelectComponent;
