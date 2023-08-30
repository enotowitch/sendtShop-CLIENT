import * as api from "../../api"
import { useContext } from "react"
import { Context } from "../../Context"

export default function useCartCard(obj) {

	const cartProduct = obj

	const { updateContext } = useContext(Context)

	async function deleteCartProduct(e) {
		const res = await api.deleteCartProduct({ product: cartProduct })
		updateContext()
	}

	return (
		{ deleteCartProduct }
	)
}
