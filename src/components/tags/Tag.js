import React from "react"
import { Chip } from "@mui/material"
import "./index.scss"
import useTag from "./useTag"

// action=filter/...
export default function Tag(props) {

	const { tag, action, id, colorTags } = props
	// * gray cause of eval
	const { filter, doNothing } = useTag(tag)

	return (
		<>
			{/* `radio` tags can be chosen (colored) */}
			{action !== "filter" &&
				<Chip
					// color tag
					variant={colorTags[id] ? "filled" : "outlined"}
					label={tag}
					sx={{ m: 1 }}
					// color tag
					onClick={() => props.onClick(tag, id)}
				/>
			}
			{/* `filter` tags are always outlined */}
			{action === "filter" &&
				<Chip
					variant={"outlined"}
					label={tag}
					sx={{ m: 1 }}
					onClick={filter}
				/>
			}
		</>
	)
}