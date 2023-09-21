import { useContext } from "react"
import { Context } from "../../Context"
import scrollToFilter from "../../utils/scrollToFilter"
import useCurrentSearchParams from "../../hooks/useCurrentSearchParams"
import useWriteSearchParams from "../../hooks/useWriteSearchParams"

export default function useTag() {

	const { skipProdsSet, showLoadMoreSet } = useContext(Context)
	const { currentSearchParams } = useCurrentSearchParams()
	const { writeSearchParams } = useWriteSearchParams()

	function filter(tag) {
		writeSearchParams({ ...currentSearchParams, tag: tag })
		skipProdsSet(0) // null skip to filter from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
		scrollToFilter()
		console.log("done filter")
	}

	return (
		{ filter }
	)
}
