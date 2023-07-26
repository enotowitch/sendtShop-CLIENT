import { useContext } from "react"
import { Context } from "../../Context"
import useStripe from "./useStripe"
import { ADMIN_ORDER_NEW_TRACK, ADMIN_ORDER_NEW_SHIPPING, ADMIN_ORDER_SENT_TRACK, ADMIN_ORDER_SENT_SHIPPING, USER_ORDER_SHIPPING, USER_ORDER_TRACK } from "../../consts"

export default function useUserOrOrderShipping() {

	const { user } = useContext(Context)
	const { stripeLink } = useStripe()

	let userOrOrder, varText, varLink, isInputDisabled // TODO rename varText=varBtnText
	// ! user (cart)
	if (window.location.pathname.includes("/cart/shipping")) {
		userOrOrder = user.shipping
		varText = "PLACE ORDER"
		varLink = stripeLink
	}
	// ! admin (new order)
	if (window.location.pathname.includes(ADMIN_ORDER_NEW_SHIPPING)) {
		userOrOrder = JSON.parse(localStorage.getItem("order")).shipping
		varText = "SEND TRACK"
		varLink = ADMIN_ORDER_NEW_TRACK
		isInputDisabled = true
	}
	// ! admin (sent order)
	if (window.location.pathname.includes(ADMIN_ORDER_SENT_SHIPPING)) {
		userOrOrder = JSON.parse(localStorage.getItem("order")).shipping
		varText = "CHECK TRACK"
		varLink = ADMIN_ORDER_SENT_TRACK
		isInputDisabled = true
	}
	// ! user (previous order)
	if (window.location.pathname.includes(USER_ORDER_SHIPPING)) {
		userOrOrder = JSON.parse(localStorage.getItem("order")).shipping
		varText = "CHECK TRACK" // TODO rename varText=varBtnText
		varLink = USER_ORDER_TRACK
		isInputDisabled = true
	}

	const userEmail = user?.email // may need separately for default user email: eg: paste user.email to shipping form on 1 `user order`

	return (
		{ userOrOrder, varText, varLink, userEmail, isInputDisabled }
	)
}
