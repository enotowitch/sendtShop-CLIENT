import React from "react"
import PostCards from "../post/PostCards"
import PostsOther from "../other/PostsOther"

export default function LikedProducts() {
	return (
		<>
			<PostCards type="product" status="liked" title="Liked Products" />
			<PostsOther type="product" className="mt4" />
		</>
	)
}
