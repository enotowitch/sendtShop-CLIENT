import React from "react"
import Banner from "../banner/Banner";
import PostCards from "../post/PostCards";
import PostFilters from "../post/PostFilters";
import PostsOther from "../other/PostsOther";
import Categories from "../categories/Categories";

export default function MainPage() {
	return (
		<>
			<Banner />
			<Categories />
			<PostFilters />
			<PostCards type="product" title="Products" />
			<PostsOther type="product" className="mt4" />
		</>
	)
}
