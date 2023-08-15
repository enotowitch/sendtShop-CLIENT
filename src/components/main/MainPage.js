import React from "react"
import Banner from "../banner/Banner";
import PostCards from "../post/PostCards";

export default function MainPage() {
	return (
		<>
			<Banner />
			<PostCards type="product" title="Products" />
		</>
	)
}
