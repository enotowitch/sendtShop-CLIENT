import { useContext } from "react"
import { Context } from "../../Context"

export default function useUserOrOrderShipping() {

	const { user } = useContext(Context)

	let userOrOrder
	if (window.location.pathname.includes("/cart/shipping")) {
		userOrOrder = user.shipping
	}
	if (window.location.pathname.includes("/order/shipping")) {
		userOrOrder = JSON.parse(localStorage.getItem("order")).shipping
	}

	return (
		{ userOrOrder }
	)
}
