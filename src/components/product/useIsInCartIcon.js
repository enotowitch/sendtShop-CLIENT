import { CART_ROUTE } from "../../consts"

export default function useIsInCartIcon() {

	function goToCart(e) {
		e.stopPropagation()
		window.location.href = CART_ROUTE // if product in cart => go to cart onClick
	}

	return (
		{ goToCart }
	)
}
