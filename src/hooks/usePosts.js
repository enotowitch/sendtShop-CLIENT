import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

// type=product/article/comment/review...
// field=tags/likes/...
// eg: all: all products/all articles/...
// eg: allWithField: product.tags/article.likes/...
export default function usePosts(type, field) { // TODO move to post folder

	// ! all
	const { update, filterPostsQuery } = useContext(Context)
	const [all, allSet] = useState([])
	useEffect(() => {
		async function getAllPosts() {
			// eg:									product {tag:sale, sort:price&asc, text:someText}
			const res = await api.getAllPosts(type)
			allSet(res)
		}

		getAllPosts()
	}, [type, update])

	// TODO liked from server to enable pagination
	// ! liked
	const { user } = useContext(Context)
	const [liked, likedSet] = useState([])
	useEffect(() => {
		// * when all posts loaded => filter liked
		function getLiked() {
			const filterLiked = all?.filter(post => user?.likes?.includes(post._id) && post)
			likedSet(filterLiked)
		}

		getLiked()
	}, [all])

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
		{ all, liked, allWithField }
	)
}
