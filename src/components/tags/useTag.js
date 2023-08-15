import { useContext } from "react"
import { Context } from "../../Context"

export default function useTag(tag) {

	const { filterPostsQuerySet, skipSet } = useContext(Context)

	function filter() {
		filterPostsQuerySet(prev => ({ ...prev, tag: tag }))
		skipSet(0) // null skip to filter from the start of the product list
		console.log("done filter")
	}

	function doNothing() {
		console.log("done nothing")
		// TODO
	}

	return (
		{ filter, doNothing }
	)
}
