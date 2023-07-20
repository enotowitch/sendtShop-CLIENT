import React, { useContext } from "react"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"
import useStripe from "./useStripe"
import { useLocation } from "react-router-dom"
import CartProducts from "./CartProducts"

export default function Cart() { // TODO refactor

	// 1. get user card products
	// 2. get all products
	// 3. if `ids from user cart` match `ids from all product` => show each product info (taken from all products)

	const { user, order } = useContext(Context)
	const { all } = usePosts("product")
	const { stripeLink } = useStripe()

	// `user` and (admin) `order` both have `cart` field (array of prod ids), so can be rendered in similar way
	let userOrOrder, link
	if (useLocation().pathname === "/cart") {
		userOrOrder = user
		link = stripeLink
	}
	if (useLocation().pathname === "/order") {
		userOrOrder = order
		link = "/putSomeLinkHere" // TODO
	}

	const cartProds = all?.filter(prod => userOrOrder?.cart.includes(prod._id))

	let allProductsTotalPrice = 0

	const cartProducts = cartProds?.map(prod => {

		const thisProdQuantity = userOrOrder?.cart.filter(id => id === prod._id).length
		const thisProdTotalPrice = prod.price * thisProdQuantity
		allProductsTotalPrice += prod.price * thisProdQuantity

		return (
			<CartCard key={prod._id} obj={prod} quantity={thisProdQuantity} totalPrice={thisProdTotalPrice} />
		)
	})

	return (
		<CartProducts cartProducts={cartProducts} allProductsTotalPrice={allProductsTotalPrice} link={link} />
	)
}
