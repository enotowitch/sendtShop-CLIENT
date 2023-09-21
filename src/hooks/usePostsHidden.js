import { useEffect, useState } from "react"
import * as api from "../api"
import useSkip from "./useSkip"

export default function usePostsHidden(type) {

	const [hidden, hiddenSet] = useState([])
	const [loading, loadingSet] = useState(true)
	const { skip, skipSet } = useSkip()
	const [serverPostsNum, serverPostsNumSet] = useState(0)

	useEffect(() => {
		async function getHiddenPosts() {
			const res = await api.hiddenPosts(type, skip)
			res && hiddenSet(prev => [...prev, ...res])
			res && loadingSet(false)
			res && serverPostsNumSet(res.length) // hide LoadMore btn when nothing to load
		}

		getHiddenPosts()
	}, [type, skip])

	return (
		[hidden, loading, skipSet, serverPostsNum]
	)
}
