import * as React from "react";
import { Chip, Autocomplete, TextField, Stack } from "@mui/material";
import "./index.scss"
import usePosts from "../../hooks/usePosts";

// field=tags/sizes/colors/...
export default function TagsInput({ placeholder, field, editValue }) {

	const { allWithField } = usePosts("product", field)
	const [value, valueSet] = React.useState(editValue) // pass editValue in `update mode`

	return (
		<Stack spacing={3} className="w100 mb inputBorderGray brS">
			<Autocomplete
				value={value}
				onChange={(e, newValue) => {
					valueSet(newValue)
				}}
				multiple
				id="tags-filled"
				options={allWithField?.map((option) => option)}
				// defaultValue={[top100Films[13].title]}
				freeSolo
				renderTags={(value, getTagProps) =>
					value.map((option, index) => (
						<>
							<Chip variant="outlined" label={option} {...getTagProps({ index })} />
							{/* hidden input to get `Chip values` in parseForm */}
							<input hidden name={`${field}${index}`} value={option} />
						</>
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="filled"
						// label="categories"
						placeholder={placeholder}
					/>
				)}
			/>
		</Stack>
	);
}