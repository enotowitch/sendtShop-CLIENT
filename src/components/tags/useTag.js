import { useContext } from "react"
import { Context } from "../../Context"
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../../consts"
import scrollToFilter from "../../utils/scrollToFilter"

export default function useTag(tag) {

	const { filterPostsQuerySet, skipSet, showLoadMoreSet } = useContext(Context)
	const navigate = useNavigate()

	function filter() {
		filterPostsQuerySet(prev => ({ ...prev, tag: tag }))
		skipSet(0) // null skip to filter from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
		navigate(MAIN_ROUTE) // where filtering results are displayed
		scrollToFilter()
		console.log("done filter")
	}

	return (
		{ filter }
	)
}
