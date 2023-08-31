import { useState } from "react"
import * as api from "../api"
import { useEffect } from "react"

export default function usePostsRandom(type) {

	const [random, randomSet] = useState()
	const [loading, loadingSet] = useState(true)

	useEffect(() => {
		async function getRandomPosts() {
			const res = await api.randomPosts(type)
			res && randomSet(res)
			res && loadingSet(false)
		}

		getRandomPosts()
	}, [type])

	return (
		[random, loading]
	)
}
