import { useEffect } from "react"
import * as api from "../../api"
import { MAIN_ROUTE } from "../../consts";

export default function Test() { // TODO delete

	useEffect(() => {
		api.test()
		setTimeout(() => {
			window.location.href = MAIN_ROUTE
		}, 5000);
	}, [])

	return (
		"test: redirecting in 5 seconds"
	)
}
