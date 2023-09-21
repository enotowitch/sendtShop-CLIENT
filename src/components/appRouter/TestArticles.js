import { useEffect } from "react"
import * as api from "../../api"
import { ARTICLES_ROUTE } from "../../consts";

export default function TestArticles() { // TODO delete

	useEffect(() => {
		api.testArticles()
		setTimeout(() => {
			window.location.href = ARTICLES_ROUTE
		}, 5000);
	}, [])

	return (
		"test: redirecting in 5 seconds"
	)
}
