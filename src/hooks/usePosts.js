import { useEffect, useState } from "react"
import * as api from "../api"

// type=product/article/comment/review...
// field=tags/likes/...
// eg: all: all products/all articles/...
// eg: allWithField: product.tags/article.likes/...
export default function usePosts(type, field) {

	// ! all
	const [all, allSet] = useState([])
	useEffect(() => {
		async function getAllPosts() {
			const res = await api.getAllPosts(type)
			allSet(res)
		}

		getAllPosts()
	}, [type])

	// ! allWithField
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
