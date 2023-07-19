import React, { useContext } from "react"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"
import { Button } from "@mui/material"
import useStripe from "./useStripe"

export default function Cart() { // TODO refactor

	// 1. get user card products
	// 2. get all products
	// 3. if `ids from user cart` match `ids from all product` => show each product info (taken from all products)

	const { user } = useContext(Context)
	const { all } = usePosts("product")
	const { stripeLink } = useStripe()

	const cartProds = all?.filter(prod => user?.cart.includes(prod._id))

	let allProdsTotalPrice = 0

	const userCart = cartProds?.map(prod => {

		const thisProdQuantity = user?.cart.filter(id => id === prod._id).length
		const thisProdTotalPrice = prod.price * thisProdQuantity
		allProdsTotalPrice += prod.price * thisProdQuantity

		return (
			<CartCard key={prod._id} obj={prod} quantity={thisProdQuantity} totalPrice={thisProdTotalPrice} />
		)
	})

	return (
		<div className="f g4 wL m0a">
			<div className="wM w100">
				{userCart}
			</div>
			<section className="tac mb wS w100">
				<div>Subtotal: ${allProdsTotalPrice}</div>
				<Button
					variant="contained"
					href={stripeLink}
				>
					PLACE ORDER
				</Button>
			</section>
		</div>
	)
}
