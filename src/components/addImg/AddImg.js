import React, { useContext } from "react"
import addImage from "./addImage.svg"
import './index.scss'
import usePreview from "./usePreview"
import CarouselProduct from "../carousel/CarouselProduct"
import { Context } from "../../Context"

export default function AddImg({ editValue, obj }) { // obj=fullPost

	const { preview, previewMake } = usePreview(editValue)
	const { uploadedImg } = useContext(Context)

	async function onChange(e) {
		// 1. make previews
		// 2.	save imgs to Context
		previewMake(e.target.files)
	}

	return (
		<label className="por">
			<input
				// required if uploadedImg.length is 0
				required={!uploadedImg.length}
				className="hiddenInput"
				name="img"
				type="file"
				onChange={onChange}
				multiple
				accept="image/png, image/gif, image/jpeg, image/webp"
			/>

			<CarouselProduct arr={preview.length > 0 ? preview : [addImage]} obj={obj} />
		</label>
	)
}