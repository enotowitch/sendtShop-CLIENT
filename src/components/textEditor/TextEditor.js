import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./index.scss"

export default function TextEditor({ editValue, className }) {

	const [value, valueSet] = useState("")

	const onChange = useCallback((value) => {
		valueSet(value);
	}, [])


	return (
		<div className={`w100 ${className}`}>
			<SimpleMDE
				value={editValue || value}
				onChange={onChange}
			/>
		</div>
	)
}