import React from "react"
import usePosts from "../../hooks/usePosts"
import PostCard from "./PostCard"
import "./index.scss"

export default function PostCards({ type }) { // type=product/article/...

	const { all } = usePosts(type) // all products/all articles/...

	return (
		<div className="f g m0a cards">
			{all?.map(obj => <PostCard key={obj._id} obj={obj} />)}
		</div>
	)
}
