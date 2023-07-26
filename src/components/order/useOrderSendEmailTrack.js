import * as api from "../../api"
import { ADMIN_ORDERS_NEW } from "../../consts"
import parseForm from "../../utils/parseForm"

export default function useOrderSendEmailTrack() {

	async function sendEmail(e) {
		e.preventDefault()
		const { form } = parseForm(e)
		const res = await api.orderSendEmailTrack(form) // email, track, orderId
		if (res.ok) { // email with track sent => change order status to "sent"
			const orderId = form._id
			await api.editPost({ type: "order", _id: orderId, status: "sent" })
			window.location.href = ADMIN_ORDERS_NEW
		}
	}

	return (
		{ sendEmail }
	)
}
