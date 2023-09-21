import { useContext } from "react"
import { Context } from "../../Context"
import * as api from "../../api"

export default function useAddArchive() {

	const { uploadedArchive } = useContext(Context)

	async function archiveArr() {
		if (uploadedArchive.length === 0) return // prevent rewrite archive, when not uploaded new, during edit
		const formData = new FormData()
		formData.append("anyfile", uploadedArchive) // append archive from Context
		const res = await api.addFile(formData, "/upload/productImages")
		return res.fileArr
	}

	return (
		{ archiveArr }
	)
}
