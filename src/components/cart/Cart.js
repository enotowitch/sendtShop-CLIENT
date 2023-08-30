import React from "react"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"
import CartProducts from "./CartProducts"
import useUserOrOrderCart from "./useUserOrOrderCart"
import CartSteps from "./CartSteps"
import YouMayLike from "../other/YouMayLike"

export default function Cart() { // TODO refactor

	const { all } = usePosts("product")
	const { userOrOrder, varLink, varLink2, className, varText, varBtnText, varBtnText2 } = useUserOrOrderCart()

	// 1. get user/order cart products
	// 2. get all products
	// 3. if `ids from user cart` match `ids from all products` => show each product info (taken from all products)
	let allProductsTotalPrice = 0
	let arr = []

	userOrOrder?.cart?.map(cartProd => { // map cart
		return all?.map(allProd => { // map all products
			if (cartProd._id === allProd._id) {
				arr.push(cartProd)
			}
		})
	})

	const cartProducts = arr?.map(cartProd => {
		if (cartProd?.quantity === 0) return
		return all?.map(allProd => {
			if (cartProd._id === allProd._id) {
				// ! additionalPrice
				let allAdditionalPrices = 0
				cartProd?.custom_field_names?.map(fieldName => {
					let additionalPrice
					if (cartProd?.[fieldName]?.includes("price")) { additionalPrice = cartProd?.[fieldName]?.match(/(?:price":")(.+\")/)[1]?.replace(/"/, "") * 1 }
					if (!cartProd?.[fieldName]?.includes("price")) { additionalPrice = 0 }
					allAdditionalPrices += additionalPrice
				})
				// ? additionalPrice
				const totalPrice = cartProd?.quantity * allProd.price
				allProductsTotalPrice += totalPrice + (allAdditionalPrices * cartProd?.quantity)
				return <CartCard key={allProd._id} obj={{ ...allProd, ...cartProd }} totalPrice={totalPrice} className={className} />
			}
		})
	})


	return (
		<>
			{cartProducts.length > 0
				?
				<>
					<CartSteps step={1} />
					<CartProducts cartProducts={cartProducts} allProductsTotalPrice={allProductsTotalPrice} link={varLink} link2={varLink2} text={varText} btnText={varBtnText} btnText2={varBtnText2} />
				</>
				:
				<div className="title tac danger">Your cart is empty</div>}
			<YouMayLike type="product" className="mt4" />
		</>
	)
}
