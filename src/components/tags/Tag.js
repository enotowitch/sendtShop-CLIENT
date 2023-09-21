import React from "react"
import { Chip } from "@mui/material"
import "./index.scss"

export default function Tag(props) {

	const { tag } = props

	return (
		<>
			{tag &&
				<>
					<Chip
						variant={"outlined"}
						label={tag}
						sx={{ m: 1 }}
						{...props}
					/>
				</>
			}
		</>
	)
}