import * as React from "react";
import { Chip, Autocomplete, TextField, Stack } from "@mui/material";
import "./index.scss"
import usePosts from "../../hooks/usePosts";

export default function TagsInput() {

	const { allWithField } = usePosts("product", "tags")

	return (
		<Stack spacing={3} className="w100 mb inputBorderGray brS">
			<Autocomplete
				multiple
				id="tags-filled"
				options={allWithField.map((option) => option)}
				// defaultValue={[top100Films[13].title]}
				freeSolo
				renderTags={(value, getTagProps) =>
					value.map((option, index) => (
						<>
							<Chip variant="outlined" label={option} {...getTagProps({ index })} />
							{/* hidden input to get `Chip values` in parseForm */}
							<input hidden name={`tag${index}`} value={option} />
						</>
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="filled"
						// label="categories"
						placeholder="categories"
					/>
				)}
			/>
		</Stack>
	);
}