import { useState } from "react"
import * as api from "../../api"

export default function useCartCounter(quantity, _id) {

	const [count, countSet] = useState(quantity)

	async function cartCounter(act) { // +/-
		if (act === "+") {
			countSet(prev => prev + 1)
			const res = await api.addTo("cart", _id)
		}
		if (act === "-") {
			countSet(prev => prev === 1 ? 1 : prev - 1) // prevent 0 prods
			// api -
		}
	}

	return (
		{ count, cartCounter }
	)
}
