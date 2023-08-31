import * as api from "../../api"
import parseForm from "../../utils/parseForm"
import clearForm from "../../utils/clearForm"
import useSnackbar from "../../hooks/useSnackbar"

export default function useContactUs() {

	const { showSnackbar } = useSnackbar()

	async function contactUs(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const res = await api.contactUs(form)
		showSnackbar({ text: "message sent" })
		setTimeout(() => clearForm("clearForm"), 1);
	}

	return (
		{ contactUs }
	)
}