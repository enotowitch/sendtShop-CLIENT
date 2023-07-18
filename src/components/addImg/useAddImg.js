import { useContext } from "react"
import * as api from "../../api"
import { Context } from "../../Context"

export default function useAddImg() {

	const { uploadedImg } = useContext(Context)

	async function addImg() {
		const formData = new FormData()
		formData.append("image", uploadedImg) // append img from Context

		const res = await api.addImg(formData) // returns uploadedImg url (on server) to store in DB
		return res?.url
	}

	return (
		{ addImg }
	)
}
