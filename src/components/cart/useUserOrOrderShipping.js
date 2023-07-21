import { useContext } from "react"
import { Context } from "../../Context"
import useStripe from "./useStripe"

export default function useUserOrOrderShipping() {

	const { user } = useContext(Context)
	const { stripeLink } = useStripe()

	let userOrOrder, varText, varLink, userEmail
	if (window.location.pathname.includes("/cart/shipping")) {
		userOrOrder = user.shipping
		varText = "PLACE ORDER"
		varLink = stripeLink
		userEmail = user?.email // may need separately for default user email
	}
	if (window.location.pathname.includes("/order/shipping")) {
		userOrOrder = JSON.parse(localStorage.getItem("order")).shipping
		varText = "SEND EMAIL"
		varLink = "/order/sent"
		userEmail = user?.email // may need separately for default user email
	}

	return (
		{ userOrOrder, varText, varLink, userEmail }
	)
}
