import React from "react"
import { Chip } from "@mui/material"
import "./index.scss"

export default function Tag({ tag }) {
	return (
		<Chip
			variant="outlined"
			label={tag}
			sx={{ m: 1 }}
		/>
	)
}