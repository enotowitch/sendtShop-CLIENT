import * as api from "../../api"
import { useContext } from "react"
import { Context } from "../../Context"
import useNoUser from "../../hooks/useNoUser"

export default function useCartCard(obj) {

	const cartProduct = obj

	const { updateContext } = useContext(Context)
	const { noUserRedirect } = useNoUser()

	async function deleteCartProduct(e) {
		noUserRedirect()
		const res = await api.deleteCartProduct({ product: cartProduct })
		updateContext()
	}

	return (
		{ deleteCartProduct }
	)
}
