import { useState } from "react"
import * as api from "../../api"

export default function useCartCounter(productQuantity, productId) {

	const [count, countSet] = useState(productQuantity)

	async function cartCounter(act) { // +/-
		if (act === "+") {
			countSet(prev => prev + 1)
			const res = await api.pullPush({ col: "user", field: "cart", item: productId, action: "push", dups: true })
		}
		if (act === "-") {
			countSet(prev => prev === 1 ? 1 : prev - 1) // prevent 0 prods
			if (count === 1) return // prevent delete whole cart product on "-" click by mistake, to delete whole cart product click "x"
			const res = await api.pullPush({ col: "user", field: "cart", item: productId, action: "pull", pullMode: "one" })
		}
	}

	return (
		{ count, cartCounter }
	)
}
