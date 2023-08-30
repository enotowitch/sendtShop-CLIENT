import SelectNative from "../form/SelectNative"
import sortProductOptions from "../../utils/sortProductOptions"
import { useContext } from "react"
import { Context } from "../../Context"

export default function PostSort() {

	const { filterPostsQuerySet, skipSet, showLoadMoreSet } = useContext(Context)

	function onChange(e) {
		filterPostsQuerySet(prev => ({ ...prev, sort: e.target.value })) // set sort value to Context
		skipSet(0) // null skip to sort from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
	}

	return (
		(window.location.pathname === "/") &&
		<div className="f">
			<SelectNative arr={sortProductOptions} className="sort" onChange={onChange} />
		</div>
	)
}
