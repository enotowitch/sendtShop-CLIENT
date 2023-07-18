import React from 'react'
import Input from '../form/Input'
import { Button } from '@mui/material'

// addArticle/editArticle
export default function article_add({ obj }) {

	// !! only props must be here, no hooks
	// * gray cause of eval
	const { addPost, editPost, fullPost, varText, varFn } = obj

	return (
		<>
			<div className="title tac">TEST: {varText}</div>
			{/* eg: addPost(e, "article")} */}
			<form className="fc" onSubmit={(e) => eval(`${varFn}(e, "article")`)}>
				<Input editValue={fullPost?.title} required name="title" label="title" helperText="text" />
				<Input editValue={fullPost?.tags} required name="tags" label="tags" helperText="tags separated by comma" />
				<Input editValue={fullPost?.text} required name="text" label="text" helperText="text" multiline />
				<Button type="submit" variant="contained">{varText}</Button>
			</form>
		</>
	)
}
