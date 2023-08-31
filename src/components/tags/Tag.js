import React from "react"
import { Chip } from "@mui/material"
import "./index.scss"
import useTag from "./useTag"

export default function Tag(props) {

	const { tag } = props
	const { filter } = useTag(tag)

	return (
		<>
			{tag &&
				<>
					<Chip
						variant={"outlined"}
						label={tag}
						sx={{ m: 1 }}
						onClick={filter}
					/>
				</>
			}
		</>
	)
}