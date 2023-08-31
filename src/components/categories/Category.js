import React, { useContext } from "react"
import "./index.scss"
import { Context } from "../../Context"
import scrollToFilter from "../../utils/scrollToFilter"

export default function Category({ src, title }) {

	// get image: local or web
	let src_
	if (src && !src.match(/http/)) { // local img
		try {
			src_ = require(`./img/${src}.jpg`) // jpg
		} catch (error) {
			src_ = require(`./img/${src}.png`) // png
		}
	} else { // web img
		src_ = src
	}

	const { filterPostsQuerySet } = useContext(Context)

	function onClick() {
		filterPostsQuerySet(prev => ({ ...prev, tag: title }))
		scrollToFilter()
	}

	return (
		<div className="fcc category" onClick={onClick}>
			<img src={src_} />
			<div className="title tac white poa">{title}</div>
		</div>
	)
}
