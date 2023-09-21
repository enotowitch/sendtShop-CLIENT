import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./index.scss"

// type=strArr ["str1","str2", ...] default
// type=objArr [{name, price},{name, price}...]
export default function _Select(props) {

	const { id, arr, placeholder, required, editValue, defaultValue, selectedValue, selectedIndex, selectedValueAndSelectId, type = "strArr" } = props

	// for edit: pass old value to editValue prop
	// eg: <Select editValue={obj.selectName} />
	React.useEffect(() => {
		editValue && valueSet(editValue)
	}, [editValue])

	const [value, valueSet] = React.useState(defaultValue)

	function onChange(e) {
		valueSet(e.target.value) // set state
		// ! selectedValue
		selectedValue && selectedValue(e.target.value) // pass selected value to parent component
		// ! selectedIndex
		if (selectedIndex) { // if selectedIndex prop passed
			let selectedInd
			arr?.map((item, ind) => JSON.stringify(item) === e.target.value && (selectedInd = ind)) // map and asign Select selected index
			selectedIndex(selectedInd) // pass Select selected index to parent component
		}
		selectedValueAndSelectId && selectedValueAndSelectId({ value: e.target.value, id: id })
		// ? selectedIndex
	}

	return (
		<Box sx={{ width: "50%" }}>
			<FormControl required={required} fullWidth>
				<InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={value}
					label={placeholder}
					onChange={onChange}
					{...props}
				>
					{type === "strArr" && arr?.map(option => <MenuItem value={option}>{option}</MenuItem>)}
					{type === "objArr" && arr?.map(objOption => objOption && <MenuItem value={JSON.stringify(objOption)}>{objOption.name} +${objOption.price}</MenuItem>)}
				</Select>
			</FormControl>
		</Box>
	);
}