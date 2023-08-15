import React from "react"
import addImage from "./addImage.svg"
import './index.scss'
import usePreview from "./usePreview"
import CarouselProduct from "../carousel/CarouselProduct"

export default function AddImg({ editValue, obj }) { // obj=fullPost

	const { preview, previewMake } = usePreview(editValue)

	async function onChange(e) {
		// 1. make previews
		// 2.	save imgs to Context
		previewMake(e.target.files)
	}

	return (
		<label className="por">
			<input
				required
				className="hiddenInput"
				name="img"
				type="file"
				onChange={onChange}
				multiple
				accept="image/png, image/gif, image/jpeg"
			/>

			<CarouselProduct arr={preview.length > 0 ? preview : [addImage]} obj={obj} />
		</label>
	)
}