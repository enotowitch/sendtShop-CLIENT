import React from 'react'
import AddImg from '../addImg/AddImg'
import Input from '../form/Input'
import { Button } from '@mui/material'
import TagsInput from '../form/TagsInput'

// addProduct/editProduct
export default function product_add({ obj }) {

	// !! only props must be here, no hooks
	// * gray cause of eval
	const { addPost, editPost, fullPost, varText, varFn } = obj

	return (
		<>
			<div className="title tac">{varText}</div>
			{/* eg: addPost(e, "product")} */}
			<form className="fc" onSubmit={(e) => eval(`${varFn}(e, "product")`)}>
				<AddImg editValue={fullPost?.img} />
				<Input editValue={fullPost?.title} required name="title" label="title" helperText="text" />
				<Input editValue={fullPost?.brand} required name="brand" label="brand" helperText="text" />
				<TagsInput />
				<Input editValue={fullPost?.price} required name="price" type="number" label="price" helperText="number" />
				<Input editValue={fullPost?.text} required name="text" label="text" helperText="text" multiline />
				<Button type="submit" variant="contained">{varText}</Button>
			</form>
		</>
	)
}
