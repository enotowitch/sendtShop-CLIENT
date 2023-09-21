import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"
import useCurrentSearchParams from "./useCurrentSearchParams"

export default function usePostsFilter(type) {

	const { showLoadMoreSet, postSortValueSet } = useContext(Context)
	const [filtered, filteredSet] = useState([])
	const [loading, loadingSet] = useState(true)
	const { skipProds, skipProdsSet } = useContext(Context)
	const { currentSearchParams } = useCurrentSearchParams()

	useEffect(() => {
		async function filterPosts() {

			// eg:									product {tag:sale, sort:price&asc, text:someText}
			const res = await api.filterPosts(type, currentSearchParams, skipProds)
			if (skipProds > 0) {
				filteredSet(prev => ([...prev, ...res])) // add to existing products (load more 2,3,4... click)
			} else {
				filteredSet(res) // rewrite existing products with new (new filter applied)
			}
			loadingSet(false)
			res.length === 0 && showLoadMoreSet(false) // hide LoadMore btn when nothing to load
		}

		filterPosts()

		// update filters (eg: sort select) on URL change (eg: "go back")
		postSortValueSet(currentSearchParams.sort)
	}, [type, skipProds, currentSearchParams.tag, currentSearchParams.text, currentSearchParams.sort])

	return (
		[filtered, loading, skipProdsSet]
	)
}