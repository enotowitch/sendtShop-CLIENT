import React from "react"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"
import CartProducts from "./CartProducts"
import useUserOrOrderCart from "./useUserOrOrderCart"
import CartSteps from "./CartSteps"

export default function Cart() { // TODO refactor

	const { all } = usePosts("product")
	const { userOrOrder, varLink, varLink2, className, varText, varBtnText, varBtnText2 } = useUserOrOrderCart()

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
				<CartSteps step={1} />
				<CartProducts cartProducts={cartProducts} allProductsTotalPrice={allProductsTotalPrice} link={varLink} link2={varLink2} text={varText} btnText={varBtnText} btnText2={varBtnText2} />
			</>
			:
			<div className="title tac danger">Your cart is empty</div>
	)
}
