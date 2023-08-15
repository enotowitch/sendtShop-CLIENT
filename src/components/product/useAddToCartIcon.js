import { useState } from "react"
import { CART_ROUTE } from "../../consts"
import usePullPush from "../../hooks/usePullPush"
import useSnackbar from "../../hooks/useSnackbar"

export default function useAddToCartIcon(productId, isInCart) {

	const [onOff, onOffSet] = useState(isInCart)
	const { pullPush } = usePullPush()
	const { showSnackbar } = useSnackbar()

	function addToCart(e) {
		// e.stopPropagation()
		onOffSet(true) // 1 click => change product card icon to "this product carted"
		// pullPush({ col: "user", field: "cart", item: productId, action: "push", dups: false }) // push only one product
		// showSnackbar({ text: "Product added to ", link: CART_ROUTE, linkText: "cart" })
		onOff === true && (window.location.href = CART_ROUTE) // 2 click => go to cart
	}

	return (
		{ onOff, addToCart }
	)
}
