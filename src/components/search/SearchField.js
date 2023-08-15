import { TextField } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import "./index.scss"
import { Context } from "../../Context"

export default function SearchField() {

	const [value, valueSet] = useState(false)
	const { filterPostsQuerySet } = useContext(Context)

	async function onChange(e) {
		valueSet(e.target.value) // set input state 
		window.scrollTo(0, 0)
	}

	useEffect(() => {
		filterPostsQuerySet(prev => ({ ...prev, text: value })) // trigger new render to show found
	}, [value])

	return (
		<TextField className="searchField" onChange={onChange} placeholder="search product title & text" autoFocus />
	)
}
