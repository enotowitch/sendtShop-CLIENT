import * as api from "../../api"
import parseForm from "../../utils/parseForm"
import useSnackbar from "../../hooks/useSnackbar"

export default function useSubscribe() {

	const { showSnackbar } = useSnackbar()

	async function subscribe(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const res = await api.subscribe(form)
		showSnackbar({ text: res.msg })
	}

	return (
		{ subscribe }
	)
}