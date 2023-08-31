import React from "react"
import TextEditor from "../textEditor/TextEditor"
import useEditFooter from "./useEditFooter"
import { Button } from "@mui/material"
import { useParams } from "react-router-dom"
import usePostFull from "../../hooks/usePostFull"

export default function EditFooter() {
	
	// type=about/terms/privacy/returns/...
	const { type } = useParams()
	const { editFooter } = useEditFooter(type)
	const { fullPost } = usePostFull(type, "myCustomOneId")

	return (
		<section className="wM m0a">
			<div className="title tac mb">Edit {type}</div>
			<form onSubmit={editFooter}>
				<TextEditor editValue={fullPost.textEditorValue} className="mb" />
				<Button type="submit" variant="contained">Edit {type}</Button>
			</form>
		</section>
	)
}
