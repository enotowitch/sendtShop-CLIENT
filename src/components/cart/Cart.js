import React, { useContext } from "react"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"

export default function Cart() {

	const { user } = useContext(Context)
	const { all } = usePosts("product")

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
		<>
			<div className="tac mb">Subtotal: ${allProdsTotalPrice}</div>
			{userCart}
		</>
	)
}
