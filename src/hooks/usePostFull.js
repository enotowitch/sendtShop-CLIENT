import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function usePostFull(type, id) {	// type=product/article/comment/review...

	// TODO move to post folder
	const [fullPost, fullPostSet] = useState({})
	const [loading, loadingSet] = useState(true)
	const { update } = useContext(Context)

	useEffect(() => {
		async function getFullPost() {
			const res = await api.fullPost(type, id)
			fullPostSet(res)
			loadingSet(false)
		}

		getFullPost()
	}, [update, type, id])

	return (
		{ fullPost, loading }
	)
}
