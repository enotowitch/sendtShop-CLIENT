import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function usePostsFilter(type) {

	const { filterPostsQuery, skip, showLoadMoreSet } = useContext(Context)
	const [filtered, filteredSet] = useState([])
	const [loading, loadingSet] = useState(true)

	// ! skip dependency
	useEffect(() => {
		async function filterPosts() {

			// eg:									product {tag:sale, sort:price&asc, text:someText}
			const res = await api.filterPosts(type, filterPostsQuery, skip)
			filteredSet(prev => ([...prev, ...res])) // add to existing products (load more 2,3,4... click)
			loadingSet(false)
			res.length === 0 && showLoadMoreSet(false) // hide LoadMore btn when nothing to load
		}

		filterPosts()
	}, [type, skip])

	// ! filterPostsQuery dependency
	useEffect(() => {
		async function filterPosts() {

			// eg:									product {tag:sale, sort:price&asc, text:someText}
			const res = await api.filterPosts(type, filterPostsQuery, skip)
			filteredSet(res) // rewrite existing products with new (new filter applied)
			loadingSet(false)
			res.length === 0 && showLoadMoreSet(false) // hide LoadMore btn when nothing to load
		}

		filterPosts()
	}, [type, filterPostsQuery])

	return (
		[filtered, loading]
	)
}