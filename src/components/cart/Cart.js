import React, { useContext } from "react"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"
import useStripe from "./useStripe"
import { useLocation } from "react-router-dom"
import CartProducts from "./CartProducts"

export default function Cart() { // TODO refactor

	const { user } = useContext(Context)
	const { all } = usePosts("product")
	const { stripeLink } = useStripe()

	// `user` and (admin) `order` both have `cart` field (array of prod ids), so can be rendered in similar way
	let userOrOrder, link, className, text
	if (useLocation().pathname === "/cart") {
		userOrOrder = user
		link = stripeLink
		text = "* Additional taxes and fees will be calculated at checkout"
	}
	if (useLocation().pathname === "/order") {
		// order never changes after it's written to DB, so can be written to localStorage, to be displayed to admin
		userOrOrder = JSON.parse(localStorage.getItem("order"))
		link = "/putSomeLinkHere" // TODO
		className = "orderCard" // !! hide all (svg) icons in CartCard via style .orderCard: .cartCard => with icons; .orderCard => NO icons
		// text = "Deliver these products using shipping info and send email with tracking link to user" // TODO
		text = "* some text here"
	}

	// 1. get user/order cart products
	// 2. get all products
	// 3. if `ids from user cart` match `ids from all products` => show each product info (taken from all products)
	const cartProds = all?.filter(prod => userOrOrder?.cart.includes(prod._id))

	let allProductsTotalPrice = 0

	const cartProducts = cartProds?.map(prod => {

		const thisProdQuantity = userOrOrder?.cart.filter(id => id === prod._id).length
		const thisProdTotalPrice = prod.price * thisProdQuantity
		allProductsTotalPrice += prod.price * thisProdQuantity

		return (
			<CartCard key={prod._id} obj={prod} quantity={thisProdQuantity} totalPrice={thisProdTotalPrice} className={className} />
		)
	})

	return (
		<CartProducts cartProducts={cartProducts} allProductsTotalPrice={allProductsTotalPrice} link={link} text={text} />
	)
}
