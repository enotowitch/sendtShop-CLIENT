import { TextField } from "@mui/material"
import React, { useEffect, useState } from "react"

export default function Input(props) {

	// for edit: pass old value to editValue prop
	// eg: <Input editValue={obj.inputName} />
	const { editValue, isDisabled } = props
	useEffect(() => {
		editValue && valueSet(editValue)
	}, [editValue])

	const [value, valueSet] = useState("")

	return (
		<TextField
			disabled={isDisabled}
			{...props}
			value={value}
			onChange={(e) => valueSet(e.target.value)}
		/>
	)
}
