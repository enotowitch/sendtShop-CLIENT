import React from "react"
import usePosts from "../../hooks/usePosts"
import PostCard from "./PostCard"
import "./index.scss"

export default function PostCards({ type }) {

	const { all } = usePosts(type)

	return (
		<div className="f g m0a cards">
			{all?.map(obj => <PostCard key={obj._id} obj={obj} />)}
		</div>
	)
}
