import React from "react"
import "./index.scss"
import scrollToFilter from "../../utils/scrollToFilter"
import useWriteSearchParams from "../../hooks/useWriteSearchParams"
import useCurrentSearchParams from "../../hooks/useCurrentSearchParams"

export default function Category({ src, title }) {

	// get image: local or web
	let src_
	if (src && !src.match(/http/)) {
		src_ = require(`./img/${src}`) // local img
	} else {
		src_ = src // web img
	}

	const { currentSearchParams } = useCurrentSearchParams()
	const { writeSearchParams } = useWriteSearchParams()

	function onClick() {
		writeSearchParams({ ...currentSearchParams, tag: title.toLowerCase().trim() })
		scrollToFilter()
	}

	return (
		<div className="fcc category" onClick={onClick}>
			<img src={src_} />
			<div className="title tac white poa">{title}</div>
		</div>
	)
}
