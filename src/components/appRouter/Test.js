import { useEffect } from "react"
import * as api from "../../api"

export default function Test() { // TODO delete

	useEffect(() => {
		api.test()
		setTimeout(() => {
			window.location.href = "/"
		}, 3000);
	}, [])

	return (
		"test"
	)
}
