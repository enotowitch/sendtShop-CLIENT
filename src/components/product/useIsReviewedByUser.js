import { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import { Context } from "../../Context"

export default function useIsReviewedByUser(_id) {

	const { all } = usePosts("review")
	const { user } = useContext(Context)

	let isReviewedByUser = false

	all?.map(review => {
		if (review.productId === _id && review.userId === user?._id) {
			isReviewedByUser = true
		}
	})

	return (
		{ isReviewedByUser }
	)
}
