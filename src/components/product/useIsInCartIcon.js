import { useNavigate } from "react-router-dom"
import { CART_ROUTE } from "../../consts"

export default function useIsInCartIcon() {

	const navigate = useNavigate()

	function goToCart(e) {
		e.stopPropagation()
		navigate(CART_ROUTE) // if product in cart => go to cart onClick
	}

	return (
		{ goToCart }
	)
}
