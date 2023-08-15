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
	let allProductsTotalPrice = 0
	let arr = []

	// make array of unique products
	userOrOrder?.cart?.map(cartProd => { // map cart
		return all?.map(allProd => { // map all products
			if (cartProd._id === allProd._id) {
				// here you can check specific property for an object whether it exist in your array or not
				const index = arr.findIndex(allProd => allProd._id == cartProd._id && allProd.size == cartProd.size && allProd.color == cartProd.color)
				index === -1 ? arr.push({ ...cartProd, quantity: 1 }) : console.log("object already exists")
			}
		})
	})

	// count quantity of unique product
	arr?.map((prod, ind) => { // uniq: 2
		const q = userOrOrder?.cart?.filter(function (e) { return e._id === prod._id && e.size === prod.size && e.color === prod.color }).length
		if (userOrOrder?.cart?.filter(function (e) { return e._id === prod._id }).length > 0) {
			prod.quantity = q
		}
	})

	const cartProducts = arr?.map(cartProd => {
		if (cartProd?.quantity === 0) return
		return all?.map(allProd => {
			if (cartProd._id === allProd._id) {
				const totalPrice = cartProd?.quantity * allProd.price
				allProductsTotalPrice += totalPrice
				return <CartCard key={allProd._id} obj={{ ...allProd, ...cartProd }} totalPrice={totalPrice} className={className} />
			}
		})
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
