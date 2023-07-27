import React from 'react'
import Input from '../form/Input'
import { Button } from '@mui/material'
import TagsInput from "../form/TagsInput"
import TextEditor from '../textEditor/TextEditor'

// addArticle/editArticle
export default function article_add({ obj }) {

	// !! only props must be here, no hooks
	// * gray cause of eval
	const { addPost, editPost, fullPost, varText, varFn } = obj

	return (
		<>
			<div className="title tac">TEST: {varText}</div>
			{/*                  eg: addPost(e, "article")} || editPost(e, "product")} */}
			<form className="fc" onSubmit={(e) => eval(`${varFn}(e, "article")`)}>
				<Input editValue={fullPost?.title} required name="title" label="title" helperText="text" />
				<TagsInput />
				<TextEditor />
				<Button type="submit" variant="contained">{varText}</Button>
			</form>
		</>
	)
}
