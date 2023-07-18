import React from "react"
import usePosts from "../../hooks/usePosts"
import Post from "./Post"
import "./index.scss"

export default function Posts({ type }) {

	const { all } = usePosts(type)

	return (
		<div className="f g m0a cards">
			{all?.map(obj => <Post key={obj._id} obj={obj} />)}
		</div>
	)
}
