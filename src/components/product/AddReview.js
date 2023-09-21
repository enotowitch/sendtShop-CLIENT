import React from "react"
import Input from "../form/Input"
import { Button } from "@mui/material"
import usePost from "../../hooks/usePost"
import Or from "../auth/Or"
import Reviews from "./Reviews"
import Rating from "./Rating"
import useIsReviewedByUser from "./useIsReviewedByUser"
import useIsOrderedByUser from "./useIsOrderedByUser"

export default function AddReview({ _id: productId }) {

	const { addPost } = usePost()
	const { isOrderedByUser } = useIsOrderedByUser(productId)
	const { isReviewedByUser } = useIsReviewedByUser(productId)

	return (
		<>
			{isOrderedByUser && !isReviewedByUser &&
				<>
					<Or text="Add your Review" className="mt mb" />

					<form onSubmit={(e) => addPost(e, "review")}>
						<input hidden name="productId" value={productId} />
						<Input required name="text" variant="outlined" multiline placeholder="review text" />
						<div className="fcc jcse">
							<Rating />
							<div>
								<Button variant="outlined" type="submit">add review</Button>
							</div>
						</div>
					</form>
				</>
			}

			{isReviewedByUser && <div className="tac mt fsi">Thank you for your review!</div>}

			<Or text="Customers' Reviews" className="mt2 mb" />

			<Reviews _id={productId} />
		</>
	)
}
