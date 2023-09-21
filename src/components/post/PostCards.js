import React, { useContext } from "react"
import "./index.scss"
import { Context } from "../../Context"
import usePostsFilter from "../../hooks/usePostsFilter"
import usePostsRandom from "../../hooks/usePostsRandom"
import PostCard from "./PostCard"
import usePostsLiked from "../../hooks/usePostsLiked"
import usePostsViewed from "../../hooks/usePostsViewed"
import usePostsHidden from "../../hooks/usePostsHidden"
import LoadMore from "./LoadMore"

// type=product/article/...
// status=all/liked/...
export default function PostCards({ type, status = "filtered", title, className }) {

	// * gray cause of eval
	const [liked, loading1, skipSet1, serverPostsNum1] = usePostsLiked(type) // all products/all articles/...
	const [filtered, loading2, skipSet2] = usePostsFilter(type) // products/articles/... filtered (on load) with pagination
	const [random, loading3] = usePostsRandom(type)
	const [viewed, loading4] = usePostsViewed(type)
	const [hidden, loading5, skipSet5, serverPostsNum5] = usePostsHidden(type)

	const { user } = useContext(Context)

	return (
		<div className="mb">
			<div className="title tac mb">{title}</div>
			<div className={`f g m0a cards ${className ? className : ""}`}>

				{eval(status)?.map(post => { // post=product/article/...
					user?.cart?.map(cartProduct => cartProduct?._id === post?._id && (post.isInCart = true))
					return <PostCard key={post?._id} post={post} loading={false} />
				})}

				{!eval(status)?.length && <div className="m0a">No items matching these criteria</div>}
			</div>
			<LoadMore skips={{ skipSet1, skipSet2, skipSet5 }} serverPostsNum={{ serverPostsNum1, serverPostsNum5 }} status={status} />
		</div>
	)
}
