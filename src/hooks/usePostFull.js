import { useEffect, useState } from "react"
import * as api from "../api"
import { useParams } from "react-router-dom"

export default function usePostFull(type) {	// type=product/article/comment/review...

	const { id } = useParams()

	const [fullPost, fullPostSet] = useState({})

	useEffect(() => {
		async function getFullPost() {
			const res = await api.fullPost(type, id)
			fullPostSet(res)
		}

		getFullPost()
	}, [])

	return (
		{ fullPost }
	)
}
