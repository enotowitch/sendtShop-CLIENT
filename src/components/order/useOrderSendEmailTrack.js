import * as api from "../../api"
import { ADMIN_ORDERS_NEW, ADMIN_ORDER_NEW_TRACK, ADMIN_ORDER_SENT_TRACK } from "../../consts"
import parseForm from "../../utils/parseForm"

export default function useOrderSendEmailTrack() {

	async function sendEmail(e) {
		e.preventDefault()
		const { form } = parseForm(e)
		const res = await api.orderSendEmailTrack(form) // email, track, orderId
		if (res.ok) { // email with track sent => change order status to "sent" & add track
			const orderId = form._id
			const orderTrack = form.track
			await api.editPost({ type: "order", _id: orderId, status: "sent", track: orderTrack })
			window.location.href = ADMIN_ORDERS_NEW
		}
	}

	let varBtnText, showBtn // don't show button in USER_ORDER_TRACK
	// ! admin order (new)
	if (window.location.pathname === ADMIN_ORDER_NEW_TRACK) {
		varBtnText = "SEND EMAIL"
		showBtn = true
	}
	// ! admin order (sent)
	if (window.location.pathname === ADMIN_ORDER_SENT_TRACK) {
		varBtnText = "SEND EMAIL AGAIN"
		showBtn = true
	}

	return (
		{ sendEmail, varBtnText, showBtn }
	)
}
