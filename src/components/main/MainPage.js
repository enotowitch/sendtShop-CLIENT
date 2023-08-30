import React from "react"
import Banner from "../banner/Banner";
import PostCards from "../post/PostCards";
import PostFilters from "../post/PostFilters";
import LoadMore from "../post/LoadMore";
import YouMayLike from "../other/YouMayLike";
import Categories from "../categories/Categories";

export default function MainPage() {
	return (
		<>
			<Banner />
			<Categories />
			<PostFilters />
			<PostCards type="product" title="Products" />
			<LoadMore />
			<YouMayLike type="product" className="mt4" />
		</>
	)
}
