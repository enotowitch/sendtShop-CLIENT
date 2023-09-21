import React from "react"
import { useState } from "react"
import { useEffect } from "react"

export default function CartCardPrice({ obj, totalPrice, className }) {

	const [additionalPrice, additionalPriceSet] = useState(0) // eg: {color: red, price: 10} = 10

	const { quantity } = obj
	const finalPrice = Number((totalPrice + (additionalPrice * quantity)).toFixed(2))

	useEffect(() => {
		// calc additionalPrice
		additionalPriceSet(0) // null additionalPrice
		obj?.custom_field_names?.map(field => {
			// if not obj => return
			if (!obj?.[field]?.includes("{")) return // prevent adding additional price from strings, only objects have it (ProductFullForm: Select gives OBJECT, other Inputs give STRING)
			additionalPriceSet(prev => prev + Number(JSON.parse(obj?.[field]).price))
		})
	}, [obj])

	return (
		<div className={className}>${finalPrice}</div>
	)
}
