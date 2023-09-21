import React, { useContext } from "react"
import { Context } from "../../Context"
import Tabs from "../tabs/Tabs"
import PostSort from "./PostSort"
import scrollToFilter from "../../utils/scrollToFilter"
import { MAIN_ROUTE } from "../../consts"
import PostFiltersTags from "./PostFiltersTags"
import useCurrentSearchParams from "../../hooks/useCurrentSearchParams"
import useWriteSearchParams from "../../hooks/useWriteSearchParams"

export default function PostFilters() {

	const { skipProdsSet, showLoadMoreSet } = useContext(Context)
	const { currentSearchParams } = useCurrentSearchParams()
	const { writeSearchParams } = useWriteSearchParams()

	function onClick(tagClicked) {
		writeSearchParams({ ...currentSearchParams, tag: tagClicked })
		skipProdsSet(0) // null skip to filter from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
		scrollToFilter()
	}

	return (
		<div className="postFilters">
			{/* filter */}
			{(window.location.pathname === MAIN_ROUTE) &&
				<Tabs
					arr={["NEW", "FEATURED", "HOT", "SALE"]}
					className="filter"
					onClick={(tagClicked) => onClick(tagClicked)}
					colorTab={currentSearchParams.tag}
				/>
			}
			{/* sort */}
			<PostSort />
			{/* tags */}
			<PostFiltersTags />
		</div>
	)
}
