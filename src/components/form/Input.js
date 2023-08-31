import { TextField } from "@mui/material"
import React, { useEffect, useState } from "react"

export default function Input(props) {

	const { editValue, isDisabled, variant = "standard", size = "normal" } = props

	// for edit: pass old value to editValue prop
	// eg: <Input editValue={obj.inputName} />
	useEffect(() => {
		editValue && valueSet(editValue)
	}, [editValue])

	// prevent type number scroll (and +/- while scrolling)
	function typeNumberPreventScroll(e) {
		e.target.blur()
		e.stopPropagation()
		setTimeout(() => { e.target.focus() }, 0)
	}

	const [value, valueSet] = useState("") // input value

	return (
		<TextField
			className="mb"
			disabled={isDisabled}
			{...props}
			value={value}
			onChange={(e) => valueSet(e.target.value)}
			variant={variant}
			size={size}
			onWheel={typeNumberPreventScroll}
		/>
	)
}
