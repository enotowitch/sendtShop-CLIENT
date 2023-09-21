import * as api from "../../api"
import useSnackbar from "../../hooks/useSnackbar"
import { useState, useEffect } from "react"

export default function useSubscribe(email) {

	const { showSnackbar } = useSnackbar()
	const [isSubscribed, isSubscribedSet] = useState(false)
	const [loading, loadingSet] = useState(true)

	async function subscribe(e) {
		const res = await api.subscribe({ email })
		isSubscribedSet(res.ok === false) // if clicked subscribe set isSubscribed to true
		showSnackbar({ text: res.msg })
		e.target.classList.add("dn") // hide button
	}

	useEffect(() => {
		async function checkIfSubscribed() {
			const res = await api.subscribe({ email, checkIfSubscribed: true })
			isSubscribedSet(res.ok === false) // if yet subscribed set isSubscribed to true
			res && loadingSet(false) // loaded
		}

		checkIfSubscribed()
	}, [])

	return (
		{ subscribe, isSubscribed, loading }
	)
}