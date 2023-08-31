import { useState } from "react"
import usePullPush from "../../hooks/usePullPush"

export default function useCartCounter(productQuantity, obj) {

	const cartProduct = obj

	const [count, countSet] = useState(productQuantity)
	const { pullPush } = usePullPush()

	async function cartCounter(act) { // +/-
		if (act === "+") {
			countSet(prev => prev + 1)
			pullPush({ col: "user", field: "cart", item: cartProduct, action: "push", dups: true })
		}
		if (act === "-") {
			countSet(prev => prev === 1 ? 1 : prev - 1) // prevent 0 prods
			// if (count === 1) return // prevent delete whole cart product on "-" click by mistake, to delete whole cart product click "x"
			pullPush({ col: "user", field: "cart", item: cartProduct, action: "pull", pullMode: "one" })
		}
	}

	return (
		{ count, cartCounter }
	)
}
