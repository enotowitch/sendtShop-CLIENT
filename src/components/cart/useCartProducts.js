import React from "react"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"
import useUserOrOrderCart from "./useUserOrOrderCart"

export default function useCartProducts() {

	const { all } = usePosts("product")
	const { userOrOrder, varLink, varLink2, className, varText, varBtnText, varBtnText2, varBtnFn } = useUserOrOrderCart()

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
		{ cartProducts, allProductsTotalPrice, varLink, varLink2, varText, varBtnText, varBtnText2, varBtnFn }
	)
}
