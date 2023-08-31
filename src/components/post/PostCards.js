import React, { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import "./index.scss"
import { Context } from "../../Context"
import usePostsFilter from "../../hooks/usePostsFilter"
import usePostsRandom from "../../hooks/usePostsRandom"
import PostCard from "./PostCard"
import usePostsLiked from "../../hooks/usePostsLiked"

// type=product/article/...
// status=all/liked/...
export default function PostCards({ type, status = "filtered", title, className }) {

	// * gray cause of eval
	const [liked, loading] = usePostsLiked(type) // all products/all articles/...
	const [filtered, loading2] = usePostsFilter(type) // products/articles/... filtered (on load) with pagination
	const [random, loading3] = usePostsRandom(type)

	const { user } = useContext(Context)

	return (
		<div className="mb">
			<div className="title tac mb">{title}</div>
			<div className={`f g m0a cards ${className ? className : ""}`}>

				{eval(status)?.map(post => { // post=product/article/...
					user?.cart?.map(cartProduct => cartProduct?._id === post?._id && (post.isInCart = true))
					return <PostCard key={post?._id} post={post} loading={loading || loading2 || loading3} />
				})}

				{eval(status)?.length === 0 && <div className="m0a">No items matching these criteria</div>}
			</div>
		</div>
	)
}
