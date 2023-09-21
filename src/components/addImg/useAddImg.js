import { useContext } from "react"
import * as api from "../../api"
import { Context } from "../../Context"

export default function useAddImg(path) {

	const { uploadedImg } = useContext(Context)

	async function imgArr(uploadedImgDirect) {
		const formData = new FormData()
		// ! append img from Context
		if (uploadedImg.length > 0) {
			uploadedImg.map(file => {
				formData.append("anyfile", file)
			})
			// ! append img passed directly to args
		} else {
			uploadedImgDirect.map(file => {
				formData.append("anyfile", file)
			})
		}

		const res = await api.addFile(formData, path) // returns uploadedImg imgArr (on server) to store in DB: eg: ["imgPath1","imgPath2",...]
		return res?.fileArr
	}

	return (
		{ imgArr }
	)
}
