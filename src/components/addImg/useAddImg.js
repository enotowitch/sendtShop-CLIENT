import { useContext } from "react"
import * as api from "../../api"
import { Context } from "../../Context"

export default function useAddImg() {

	const { uploadedImg } = useContext(Context)

	async function imgArr() {
		const formData = new FormData()
		uploadedImg.map(file => { // e.target.file[0,1,2...]
			formData.append("image", file) // append img from Context
		})

		const res = await api.addImg(formData) // returns uploadedImg imgArr (on server) to store in DB: eg: ["imgPath1","imgPath2",...]
		return res?.imgArr
	}

	return (
		{ imgArr }
	)
}
