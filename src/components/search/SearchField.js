import { TextField } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import "./index.scss"
import { Context } from "../../Context"
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../../consts"
import scrollToFilter from "../../utils/scrollToFilter"

export default function SearchField() {

	const [value, valueSet] = useState(false)
	const { filterPostsQuerySet, skipSet, showLoadMoreSet } = useContext(Context)
	const navigate = useNavigate()

	async function onChange(e) {
		valueSet(e.target.value) // set input state
		skipSet(0) // null skip to search from the start of the product list 
		showLoadMoreSet(true) // new filter => show LoadMore btn
		navigate(MAIN_ROUTE) // where filtering results are displayed
		scrollToFilter()
	}

	useEffect(() => {
		filterPostsQuerySet(prev => ({ ...prev, text: value })) // trigger new render to show found
	}, [value])

	return (
		<TextField type="search" className="searchField" onChange={onChange} placeholder="search product title & text" autoFocus />
	)
}
