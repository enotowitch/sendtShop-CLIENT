import { useState } from "react"
import * as api from "../api"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function usePostsViewed(type) {

	const [viewed, viewedSet] = useState()
	const [loading, loadingSet] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		async function getViewedPosts() {
			const res = await api.viewedPosts(type)
			res && viewedSet(res)
			res && loadingSet(false)
		}

		getViewedPosts()
	}, [type, id])

	return (
		[viewed, loading]
	)
}
