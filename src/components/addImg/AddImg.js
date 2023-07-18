import React, { useContext } from "react"
import addImage from "./addImage.svg"
import { Context } from "../../Context"
import './index.scss'
import usePreview from "./usePreview"

export default function AddImg({ editValue, className }) {

	const { uploadedImgSet } = useContext(Context)
	const { preview, previewMake } = usePreview(editValue)

	async function onChange(e) {
		// * only saves uploadedImg to Context, image upload happens in useAddImg
		uploadedImgSet(e.target.files[0])
		previewMake(e.target.files[0])
	}

	return (
		<label>
			<input
				// required
				hidden
				name="img"
				type="file"
				onChange={onChange}
			/>

			<img
				src={preview || addImage}
				className={className}
			/>
		</label>
	)
}