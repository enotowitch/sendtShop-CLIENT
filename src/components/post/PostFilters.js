import React, { useContext } from "react"
import { Context } from "../../Context"
import Tabs from "../tabs/Tabs"
import PostSort from "./PostSort"
import scrollToFilter from "../../utils/scrollToFilter"

export default function PostFilters() {

	const { filterPostsQuerySet, skipSet, showLoadMoreSet } = useContext(Context)

	function onClick(tagClicked) {
		filterPostsQuerySet(prev => ({ ...prev, tag: tagClicked })) // define tab clicked to filter
		skipSet(0) // null skip to filter from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
		scrollToFilter()
	}

	return (
		<div className="postFilters">
			{/* filter */}
			{(window.location.pathname === "/") &&
				<Tabs
					arr={["NEW", "FEATURED", "HOT", "SALE"]}
					className="filter"
					onClick={(tagClicked) => onClick(tagClicked)}
				/>
			}
			{/* sort */}
			<PostSort />
		</div>
	)
}
