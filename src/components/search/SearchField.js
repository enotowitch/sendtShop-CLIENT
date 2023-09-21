import { TextField } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import "./index.scss"
import { Context } from "../../Context"
import scrollToFilter from "../../utils/scrollToFilter"
import useWriteSearchParams from "../../hooks/useWriteSearchParams"

export default function SearchField() {

	const { skipProdsSet, showLoadMoreSet, searchFieldValue, searchFieldValueSet } = useContext(Context)
	const { writeSearchParams } = useWriteSearchParams()
	const [focused, focusedSet] = useState(0)

	async function onChange(e) {
		searchFieldValueSet(e.target.value) // set input state
		skipProdsSet(0) // null skip to search from the start of the product list 
		showLoadMoreSet(true) // new filter => show LoadMore btn
		scrollToFilter()
	}

	useEffect(() => {
		// !!!!
		const currentSearchParams = JSON.parse(localStorage.getItem("filters"))
		if (searchFieldValue) {
			writeSearchParams({ ...currentSearchParams, text: searchFieldValue })
		} else {
			writeSearchParams({ ...currentSearchParams })
		}
	}, [searchFieldValue, focused])

	return (
		<TextField
			value={searchFieldValue}
			type="search"
			className="searchField"
			onChange={onChange}
			placeholder="search product title & text"
			autoFocus
			onFocus={() => focusedSet(prev => prev + 1)}
		/>
	)
}
