import { useContext, useState } from "react"
import { useEffect } from "react"
import * as api from "../api"
import useSkip from "./useSkip"
import { Context } from "../Context"

export default function usePostsLiked(type) {

	const [liked, likedSet] = useState([])
	const [loading, loadingSet] = useState(true)
	const { skip, skipSet } = useSkip()
	const { user } = useContext(Context)
	const [serverPostsNum, serverPostsNumSet] = useState(0)

	// ! 1: skip dependency
	useEffect(() => {
		async function getLiked() {
			const res = await api.likedPosts(type, skip)
			res && likedSet(prev => [...prev, ...res])
			res && loadingSet(false)
			res && serverPostsNumSet(res.length) // hide LoadMore btn when nothing to load
		}

		getLiked()
	}, [type, skip])

	// ! 2: user likes dependency
	useEffect(() => {
		async function getLiked() {
			const res = await api.likedPosts(type, skip)
			res && likedSet(res)
			res && loadingSet(false)
		}

		setTimeout(() => getLiked(), 1) // on 1 load rewrite all posts, then use 1 or 2 dependency
	}, [user?.likes])

	return (
		[liked, loading, skipSet, serverPostsNum]
	)
}
