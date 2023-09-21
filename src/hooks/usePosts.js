import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

// type=product/article/comment/review...
// field=tags/likes/...
// eg: all: all products/all articles/...
// eg: allWithField: product.tags/article.likes/...
export default function usePosts(type, field) { // TODO move to post folder

	// ! all
	const { update } = useContext(Context)
	const [all, allSet] = useState([])
	useEffect(() => {
		async function getAllPosts() {
			// eg:									product {tag:sale, sort:price&asc, text:someText}
			const res = await api.getAllPosts(type)
			allSet(res)
		}

		getAllPosts()
	}, [type, update])

	// ! allWithField
	// eg: all product tags
	const [allWithField, allWithFieldSet] = useState([])
	useEffect(() => {
		async function getAllWithFieldPosts() {
			const res = await api.getAllPosts(type, field)
			allWithFieldSet(res)
		}

		field && getAllWithFieldPosts()
	}, [type, field])


	return (
		{ all, allWithField }
	)
}
