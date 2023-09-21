import { useContext } from "react"
import { Context } from "../../Context"
import useStripe from "./useStripe"
import { ADMIN_ORDER_NEW_TRACK, ADMIN_ORDER_NEW_SHIPPING, ADMIN_ORDER_SENT_TRACK, ADMIN_ORDER_SENT_SHIPPING, USER_ORDER_SHIPPING, USER_ORDER_TRACK, CART_SHIPPING } from "../../consts"
import usePostFull from "../../hooks/usePostFull"

export default function useUserOrOrderShipping() {

	const { user } = useContext(Context)
	const { stripeLink } = useStripe()

	// get order from orderId
	const orderId = localStorage.getItem("orderId")
	const { fullPost: order } = usePostFull("order", orderId)

	let userOrOrder, varText, varLink, isInputDisabled, isBtnDisabled, varBtnHelpText // TODO rename varText=varBtnText
	// ! user (cart)
	if (window.location.pathname.includes(CART_SHIPPING)) {
		userOrOrder = user.shipping
		varText = "PLACE ORDER"
		varLink = stripeLink
	}
	// ! admin (new order)
	if (window.location.pathname.includes(ADMIN_ORDER_NEW_SHIPPING)) {
		userOrOrder = order.shipping
		varText = "SEND TRACK"
		varLink = ADMIN_ORDER_NEW_TRACK
		isInputDisabled = true
	}
	// ! admin (sent order)
	if (window.location.pathname.includes(ADMIN_ORDER_SENT_SHIPPING)) {
		userOrOrder = order.shipping
		varText = "CHECK TRACK"
		varLink = ADMIN_ORDER_SENT_TRACK
		isInputDisabled = true
	}
	// ! user (previous order)
	if (window.location.pathname.includes(USER_ORDER_SHIPPING)) {
		userOrOrder = order.shipping
		varText = "CHECK TRACK" // TODO rename varText=varBtnText
		varLink = USER_ORDER_TRACK
		isInputDisabled = true
		// disable or enable button dep. on order.status
		// if order.status = "pending" => track is not sent yet by admin => so user can NOT check track
		// if order.status = "sent" => track is already sent by admin => so user CAN check track
		const orderStatus = order.status
		if (orderStatus === "pending") {
			isBtnDisabled = true
			varBtnHelpText = "* track is not sent yet by admin"
		}
		if (orderStatus === "sent") {
			isBtnDisabled = false
		}
	}

	const userEmail = user?.email // may need separately for default user email: eg: paste user.email to shipping form on 1 `user order`

	return (
		{ userOrOrder, varText, varLink, userEmail, isInputDisabled, isBtnDisabled, varBtnHelpText }
	)
}
