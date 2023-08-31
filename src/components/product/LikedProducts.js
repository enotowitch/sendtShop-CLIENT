import React from "react"
import PostCards from "../post/PostCards"
import YouMayLike from "../other/YouMayLike"

export default function LikedProducts() {
	return (
		<>
			<PostCards type="product" status="liked" title="Liked Products" />
			<YouMayLike type="product" className="mt4" />
		</>
	)
}
