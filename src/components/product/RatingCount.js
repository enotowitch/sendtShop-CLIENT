import React, { useContext } from "react"
import Rating from "./Rating"
import usePosts from "../../hooks/usePosts"
import { Context } from "../../Context"

export default function RatingCount({ _id: productId, showCount = false }) {

	const { reviews } = useContext(Context)
	const ratings = []

	reviews?.map(review => {
		if (review.productId === productId) {
			ratings.push(review.rating)
		}
	})

	let avarageRating = 0
	ratings.map(rating => avarageRating += Number(rating)) // 1+2+3+4+5=15
	avarageRating = avarageRating / ratings.length // 15/5=3
	avarageRating = avarageRating.toFixed(2)

	return (
		ratings.length > 0 &&
		<>
			<div className="fcc">
				<Rating initialValue={avarageRating} disabled={true} size={20} />
			</div>
			{showCount &&
				<div className="gray tac">customer reviews ({ratings.length})</div>
			}
		</>
	)
}
