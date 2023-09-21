import { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import { Context } from "../../Context"

export default function useIsReviewedByUser(_id) {

	const { user, reviews } = useContext(Context)

	let isReviewedByUser = false

	reviews?.map(review => {
		if (review.productId === _id && review.userId === user?._id) {
			isReviewedByUser = true
		}
	})

	return (
		{ isReviewedByUser }
	)
}
