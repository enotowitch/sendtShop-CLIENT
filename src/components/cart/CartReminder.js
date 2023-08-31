import React, { useContext } from "react"
import "./index.scss"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"
import { useState } from "react"
import { Close } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"
import { CART_ROUTE } from "../../consts"

export default function CartReminder() {

	const [show, showSet] = useState(true)
	const { user } = useContext(Context)
	const { all } = usePosts("product")
	const navigate = useNavigate()

	function close(e) {
		e.stopPropagation()
		showSet(prev => !prev)
	}

	// calculations
	let allProductsTotalPrice = 0
	let prods = []

	user?.cart?.map(cartProd => { // map cart
		return all?.map(allProd => { // map all products
			if (cartProd._id === allProd._id) {
				prods.push({ ...cartProd, ...allProd })
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
			}
		})
	})

	return (
		show &&
		<div className="cartReminder" onClick={() => navigate(CART_ROUTE)}>
			{prods.length} products in cart : ${allProductsTotalPrice.toFixed(2)}
			<Close onClick={close} className="ml" />
		</div>
	)
}
