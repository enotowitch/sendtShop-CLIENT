import React from 'react'
import AddImg from '../addImg/AddImg'
import Input from '../form/Input'
import { Button } from '@mui/material'
import TagsInput from '../form/TagsInput'
import InputsAddable from '../form/InputsAddable'

// addProduct/editProduct
export default function product_add({ obj }) {

	// !! only props must be here, no hooks
	// * gray cause of eval
	const { addPost, editPost, fullPost, varText, varFn } = obj

	return (
		<>
			<div className="title tac">{varText}</div>
			{/*                                   eg: addPost(e, "product")} */}
			<form className="fc" onSubmit={(e) => eval(`${varFn}(e, "product")`)}>
				<AddImg editValue={fullPost?.img} obj={fullPost} />
				<Input required editValue={fullPost?.title} name="title" label="title" />
				<Input required editValue={fullPost?.brand} name="brand" label="brand" />
				{/* // TODO common component for TagsInput used in article_add & product_add */}
				<TagsInput editValue={fullPost?.tags} placeholder="categories" field="tags" />
				<TagsInput editValue={fullPost?.sizes} placeholder="sizes" field="sizes" />
				<TagsInput editValue={fullPost?.colors} placeholder="colors" field="colors" />
				<Input required editValue={fullPost?.price} name="price" type="number" label="price" />
				<Input required editValue={fullPost?.text} name="text" label="text" multiline />
				<Input editValue={fullPost?.custom_field} name="custom_field" label="custom field" helperText="eg: custom inscription" />
				<InputsAddable type="characteristic" title="Characteristics" editNames={fullPost?.characteristicNames} editValues={fullPost?.characteristicValues} />
				<InputsAddable type="information" title="Information" editNames={fullPost?.informationNames} editValues={fullPost?.informationValues} />
				<Button type="submit" variant="contained">{varText}</Button>
			</form>
		</>
	)
}
