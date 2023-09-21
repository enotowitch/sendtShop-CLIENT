import React, { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import Review from "./Review"
import { Context } from "../../Context"

export default function Reviews({ _id: productId }) {

	const { reviews } = useContext(Context)
	const reviewCount = reviews?.filter(review => review.productId === productId && review).length

	return (
		<div className="mb">
			{reviews?.map(review => review.productId === productId && <Review key={review._id} obj={review} />)}
			{reviewCount === 0 && <div className="tac fsi">There are no Customers' Reviews yet, be the first to leave a review!</div>}
			<hr className="mt2 mb px mobile"></hr>
		</div>
	)
}
