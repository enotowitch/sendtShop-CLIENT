import { useContext } from "react"
import { Context } from "../../Context"
import useStripe from "./useStripe"

export default function useUserOrOrderShipping() {

	const { user } = useContext(Context)
	const { stripeLink } = useStripe()

	let userOrOrder, varText, varLink
	if (window.location.pathname.includes("/cart/shipping")) {
		userOrOrder = user.shipping
		varText = "PLACE ORDER"
		varLink = stripeLink
	}
	if (window.location.pathname.includes("/order/shipping")) {
		userOrOrder = JSON.parse(localStorage.getItem("order")).shipping
		varText = "SEND EMAIL"
		varLink = "/order/sent"
	}

	return (
		{ userOrOrder, varText, varLink }
	)
}
