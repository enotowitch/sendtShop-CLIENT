import * as api from "../../api"
import parseForm from "../../utils/parseForm"

export default function useOrderSendEmailTrack() {

	async function sendEmail(e) {
		const { form } = parseForm(e)
		const res = await api.orderSendEmailTrack(form)
		console.log(res)
	}

	return (
		{ sendEmail }
	)
}
