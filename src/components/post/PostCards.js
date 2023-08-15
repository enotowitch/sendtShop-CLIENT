import React, { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import PostCard from "./PostCard"
import "./index.scss"
import { Context } from "../../Context"
import PostFilters from "./PostFilters"
import usePostsFilter from "../../hooks/usePostsFilter"
import LoadMore from "./LoadMore"

// type=product/article/...
// status=all/liked/...
export default function PostCards({ type, status = "filtered", title }) {

	// * gray cause of eval
	const { liked } = usePosts(type) // all products/all articles/...
	const { filtered } = usePostsFilter(type) // products/articles/... filtered (on load) with pagination

	const { user } = useContext(Context)
	let isInCart = false

	// TODO ???
	return (
		<div className="mb">
			<div className="title tac mb">{title}</div>
			<PostFilters />
			<div className="f g m0a cards">
				{eval(status)?.map(post => { // post=product/article/...

					user?.cart?.includes(post._id) ? isInCart = true : isInCart = false

					return <PostCard key={post._id} obj={{ ...post, isInCart }} />
				})}

				{eval(status)?.length === 0 && <div className="m0a">No items matching these criteria</div>}
			</div>
			<LoadMore />
		</div>
	)
}
