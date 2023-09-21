import { useEffect, useState } from "react"

export default function useIsNotOnTop() {

	const [isNotOnTop, isNotOnTopSet] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			if (scrollTop > 0) {
				isNotOnTopSet(true)
			} else {
				isNotOnTopSet(false)
			}
		})
	}, [])

	return (
		{ isNotOnTop }
	)
}
