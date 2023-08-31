import { TextField } from "@mui/material"
import React from "react"

export default function InputUncontrolled(props) {
	
	const { isDisabled, variant = "standard", size = "normal" } = props

	return (
		<TextField
			className="mb"
			disabled={isDisabled}
			{...props}
			variant={variant}
			size={size}
		/>
	)
}
