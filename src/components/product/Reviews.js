import React from "react"
import usePosts from "../../hooks/usePosts"
import Review from "./Review"

export default function Reviews({ _id: productId }) {

	const { all } = usePosts("review")
	const reviewCount = all?.filter(review => review.productId === productId && review).length

	return (
		<div className="mb">
			{all?.map(review => review.productId === productId && <Review key={review._id} obj={review} />)}
			{reviewCount === 0 && <div className="tac fsi">There are no Customers' Reviews yet, be the first to leave a review!</div>}
			<hr className="mt2 mb px mobile"></hr>
		</div>
	)
}
