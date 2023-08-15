import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { ARTICLES_ROUTE, LIKED_PRODS_ROUTE } from "../consts"
import { Context } from "../Context"

export default function usePostsFilter(type) {

	const { filterPostsQuery, skip } = useContext(Context)
	const [filtered, filteredSet] = useState([])

	// ! skip dependency
	useEffect(() => {
		async function filterPosts() {

			// eg:									product {tag:sale, sort:price&asc, text:someText}
			const res = await api.filterPosts(type, filterPostsQuery, skip)
			filteredSet(prev => ([...prev, ...res]))
		}

		filterPosts()
	}, [type, skip])

	// ! filterPostsQuery dependency
	useEffect(() => {
		async function filterPosts() {

			// eg:									product {tag:sale, sort:price&asc, text:someText}
			const res = await api.filterPosts(type, filterPostsQuery, skip)
			filteredSet(res)
		}

		filterPosts()
	}, [type, filterPostsQuery])

	return (
		{ filtered }
	)
}