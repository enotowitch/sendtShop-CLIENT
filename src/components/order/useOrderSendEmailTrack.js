import * as api from "../../api"
import parseForm from "../../utils/parseForm"

export default function useOrderSendEmailTrack() {

	async function sendEmail(e) {
		e.preventDefault()
		const { form } = parseForm(e)
		const res = await api.orderSendEmailTrack(form)
		res.ok && (window.location.href = "/") // TODO go to "/orders" and remove `order` to which email admin sent track
	}

	return (
		{ sendEmail }
	)
}
