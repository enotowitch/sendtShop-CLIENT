import SelectNative from "../form/SelectNative"
import sortProductOptions from "./sortProductOptions"
import { useContext } from "react"
import { Context } from "../../Context"
import { MAIN_ROUTE } from "../../consts"
import useCurrentSearchParams from "../../hooks/useCurrentSearchParams"
import useWriteSearchParams from "../../hooks/useWriteSearchParams"

export default function PostSort() {

	const { skipProdsSet, showLoadMoreSet, postSortValue, postSortValueSet } = useContext(Context)
	const { currentSearchParams } = useCurrentSearchParams()
	const { writeSearchParams } = useWriteSearchParams()

	function onChange(e) {
		postSortValueSet(e.target.value) // set Context value and pass it to SelectNative
		writeSearchParams({ ...currentSearchParams, sort: e.target.value })
		skipProdsSet(0) // null skip to sort from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
	}

	return (
		(window.location.pathname === MAIN_ROUTE) &&
		<div className="f">
			<SelectNative
				value={postSortValue}
				arr={sortProductOptions}
				className="sort"
				onChange={onChange}
				defaultValue="SORT"
			/>
		</div>
	)
}
