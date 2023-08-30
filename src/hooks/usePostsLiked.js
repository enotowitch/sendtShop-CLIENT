import { useContext } from "react"
import { Context } from "../Context"
import { useState } from "react"
import { useEffect } from "react"
import usePosts from "./usePosts"

export default function usePostsLiked() {

	// TODO liked from server to enable pagination
	// ! liked
	const { user } = useContext(Context)
	const { all } = usePosts("product")

	const [liked, likedSet] = useState([])
	const [loading, loadingSet] = useState(true)

	useEffect(() => {
		// * when all posts loaded => filter liked
		function getLiked() {
			const filterLiked = all?.filter(post => user?.likes?.includes(post._id) && post)
			likedSet(filterLiked)
			loadingSet(false)
		}

		getLiked()
	}, [all, user])

	return (
		[liked, loading]
	)
}
