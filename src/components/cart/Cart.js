import React from "react"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"
import CartProducts from "./CartProducts"
import useUserOrOrderCart from "./useUserOrOrderCart"
import CartSteps from "./CartSteps"

export default function Cart() { // TODO refactor

	const { all } = usePosts("product")
	const { userOrOrder, varLink, className, varText, varBtnText } = useUserOrOrderCart()

	// 1. get user/order cart products
	// 2. get all products
	// 3. if `ids from user cart` match `ids from all products` => show each product info (taken from all products)
	const cartProds = all?.filter(prod => userOrOrder?.cart?.includes(prod._id))

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
		cartProducts.length > 0
			?
			<>
				<CartSteps />
				<CartProducts cartProducts={cartProducts} allProductsTotalPrice={allProductsTotalPrice} link={varLink} text={varText} btnText={varBtnText} />
			</>
			:
			<div className="title tac danger">Your cart is empty</div>
	)
}
