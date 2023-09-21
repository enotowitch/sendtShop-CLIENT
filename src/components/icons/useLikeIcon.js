import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import usePullPush from "../../hooks/usePullPush"

export default function useLikeIcon(obj) {

	const { type, _id } = obj
	const { user } = useContext(Context)
	const { pullPush } = usePullPush()

	// ! isProductLiked:                                   user likes includes productId
	const [isProductLiked, isProductLikedSet] = useState(user?.likes?.includes(_id))
	useEffect(() => {
		isProductLikedSet(user?.likes?.includes(_id))
	}, [user, _id]) // watch if user liked and rerender all prods' likes
	
	// ! articleLikesCount:                                   	article.likes.length
	const [articleLikesCount, articleLikesCountSet] = useState(obj?.likes?.length)

	async function likeDislike() {
		// product likes: push productId to user.likes
		if (type === "product") {
			pullPush({ col: "user", colId: user?._id, field: "likes", action: "pullPush", item: _id })
			// toggle state
			isProductLikedSet(prev => !prev)
		}
		// article likes: push userId to article.likes
		if (type === "article") {
			const res = await pullPush({ col: "article", colId: _id, field: "likes", action: "pullPush", item: user?._id })
			// toggle state
			res.action === "pull" && articleLikesCountSet(prev => prev - 1)
			res.action === "push" && articleLikesCountSet(prev => prev + 1)
		}
	}


	return (
		{ likeDislike, isProductLiked, articleLikesCount }
	)
}
