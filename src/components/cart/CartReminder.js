import React, { useContext, useState, useEffect } from "react"
import "./index.scss"
import { Context } from "../../Context"
import { Close } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"
import { CART_ROUTE } from "../../consts"
import * as api from "../../api"

export default function CartReminder() {

	useEffect(() => {
		async function getActualUserCart() {
			await api.getActualUserCart()
			updateContext()
		}

		getActualUserCart()
	}, [])

	const [show, showSet] = useState(true)
	const { user, products, updateContext } = useContext(Context)
	const navigate = useNavigate()

	function close(e) {
		e.stopPropagation()
		showSet(prev => !prev)
	}

	// calculations
	let allProductsTotalPrice = 0
	let quantity = 0

	user?.cart?.map(cartProd => { // map cart
		return products?.map(allProd => { // map all products
			if (allProd.status === "hidden" || allProd.status === "deleted") return // prevent adding "hidden/deleted" prods to CartReminder
			if (cartProd._id === allProd._id) {
				quantity += Number(cartProd.quantity)
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
		show && quantity > 0 &&
		<div className="cartReminder" onClick={() => navigate(CART_ROUTE)}>
			{quantity} product{quantity > 1 && "s"} in cart : ${allProductsTotalPrice.toFixed(2)}
			<Close onClick={close} className="ml" />
		</div>
	)
}
