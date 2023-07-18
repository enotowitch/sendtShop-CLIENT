import { useEffect, useState } from "react"
import * as api from "../api"

export default function usePosts(type) { // type=product/article/comment/review...

	const [all, allSet] = useState([])

	// ! all
	useEffect(() => {
		async function getAllPosts() {
			const res = await api.getAllPosts(type)
			allSet(res)
		}

		getAllPosts()
	}, [])


	return (
		{ all }
	)
}
