import React from "react"
import useCurrentSearchParams from "../../hooks/useCurrentSearchParams"
import Tag from "../tags/Tag"
import useWriteSearchParams from "../../hooks/useWriteSearchParams"
import { useContext } from "react"
import { Context } from "../../Context"
import fixSortText from "./fixSortText"

export default function PostFiltersTags() {

	const { currentSearchParams } = useCurrentSearchParams()
	const { writeSearchParams } = useWriteSearchParams()
	const { searchFieldValueSet, postSortValueSet } = useContext(Context)

	function deleteTag(paramName) {
		delete currentSearchParams?.[paramName] // ??
		writeSearchParams(currentSearchParams)
		paramName === "text" && searchFieldValueSet("") // null searchFieldValue
		paramName === "sort" && postSortValueSet("")
	}

	return (
		<div className="fcc w100">
			{Object.keys(currentSearchParams)?.map((paramName, paramInd) => {
				let paramValue = Object.values(currentSearchParams)[paramInd]
				paramValue = fixSortText(paramName, paramValue)
				if (!paramValue) return
				return (
					<>
						<Tag tag={`${paramName}: ${paramValue}`} onDelete={() => deleteTag(paramName)} className="cardAnim" />
					</>
				)
			})}
		</div>
	)
}
